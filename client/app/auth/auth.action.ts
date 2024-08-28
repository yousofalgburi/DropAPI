'use server'

import type { z } from 'zod'
import { Argon2id } from 'oslo/password'
import { lucia } from '@/lib/lucia'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { generateCodeVerifier, generateState } from 'arctic'
import { googleOAuthClient } from '@/lib/googleOauth'
import sql from '@/db'
import type { signInSchema, signUpSchema } from '@/lib/validators/auth'
import { Resend } from 'resend'
import { nanoid } from 'nanoid'
import { randomBytes } from 'node:crypto'

const resend = new Resend(process.env.RESEND_API_KEY)

export const signUp = async (values: z.infer<typeof signUpSchema>) => {
	try {
		const [existingUser] = await sql`
            SELECT * FROM public.user WHERE email = ${values.email.toLowerCase()}
        `

		if (existingUser) {
			return { error: 'User already exists', success: false }
		}

		const hashed_password = await new Argon2id().hash(values.password)
		const verificationToken = nanoid()
		const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000)

		const { error } = await resend.emails.send({
			from: 'support@dropapi.com',
			to: values.email,
			subject: 'Verify your email',
			html: `<p>Click <a href="https://dropapi.com/auth/verify-email?token=${verificationToken}">here</a> to verify your email.</p>`,
		})

		if (error) {
			console.log(error)
			return { success: false, error: 'Something went wrong' }
		}

		const [user] = await sql`
            INSERT INTO public.user (email, name, hashed_password, email_verified)
            VALUES (${values.email.toLowerCase()}, ${values.name}, ${hashed_password}, false)
            RETURNING *
        `

		await sql`
            INSERT INTO email_verification (user_id, token, expires_at)
            VALUES (${user.id}, ${verificationToken}, ${expiresAt})
        `

		return { success: true, message: 'Please check your email to verify your account.' }
	} catch (error) {
		console.log(error)
		return { error: 'Something went wrong', success: false }
	}
}

export const signIn = async (values: z.infer<typeof signInSchema>) => {
	const [user] = await sql`
        SELECT * FROM public.user WHERE email = ${values.email.toLowerCase()}
    `

	if (!user || !user.hashed_password) {
		return { success: false, error: 'Invalid Credentials!' }
	}

	if (!user.email_verified) {
		return { success: false, error: 'Please verify your email before logging in.' }
	}

	const passwordMatch = await new Argon2id().verify(user.hashed_password, values.password)
	if (!passwordMatch) {
		return { success: false, error: 'Invalid Credentials!' }
	}

	const session = await lucia.createSession(user.id, {})
	const sessionCookie = await lucia.createSessionCookie(session.id)
	cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)

	return { success: true }
}

export const logOut = async () => {
	const sessionCookie = await lucia.createBlankSessionCookie()
	cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
	return redirect('/auth')
}

export const getGoogleOauthConsentUrl = async () => {
	try {
		const state = generateState()
		const codeVerifier = generateCodeVerifier()

		cookies().set('codeVerifier', codeVerifier, {
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
		})
		cookies().set('state', state, {
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
		})

		const authUrl = await googleOAuthClient.createAuthorizationURL(state, codeVerifier, {
			scopes: ['email', 'profile'],
		})

		return { success: true, url: authUrl.toString() }
	} catch (error) {
		return { success: false, error: 'Something went wrong' }
	}
}

export const requestPasswordReset = async (email: string) => {
	try {
		const [user] = await sql`
			SELECT * FROM public.user WHERE email = ${email.toLowerCase()} and hashed_password is not null
		`

		if (!user) {
			return { success: false, error: 'User not found' }
		}

		const resetToken = randomBytes(32).toString('hex')
		const expiresAt = new Date(Date.now() + 1 * 60 * 60 * 1000) // 1 hour

		await sql`
			INSERT INTO password_reset (user_id, token, expires_at)
			VALUES (${user.id}, ${resetToken}, ${expiresAt})
		`

		const { error } = await resend.emails.send({
			from: 'support@dropapi.com',
			to: email,
			subject: 'Reset your password',
			html: `<p>Click <a href="https://dropapi.com/auth/reset-password?token=${resetToken}">here</a> to reset your password.</p>`,
		})

		if (error) {
			console.log(error)
			return { success: false, error: 'Failed to send reset email' }
		}

		return { success: true, message: 'Password reset email sent' }
	} catch (error) {
		console.log(error)
		return { error: 'Something went wrong', success: false }
	}
}

export const resetPassword = async (token: string, newPassword: string) => {
	try {
		const [resetRequest] = await sql`
			SELECT * FROM password_reset WHERE token = ${token} AND expires_at > NOW()
		`

		if (!resetRequest) {
			return { success: false, error: 'Invalid or expired reset token' }
		}

		const hashedPassword = await new Argon2id().hash(newPassword)

		await sql`
			UPDATE public.user SET hashed_password = ${hashedPassword} WHERE id = ${resetRequest.user_id}
		`

		await sql`
			DELETE FROM password_reset WHERE token = ${token}
		`

		return { success: true, message: 'Password reset successfully' }
	} catch (error) {
		console.log(error)
		return { error: 'Something went wrong', success: false }
	}
}
