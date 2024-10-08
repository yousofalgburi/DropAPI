import sql from '@/db'
import { googleOAuthClient } from '@/lib/googleOauth'
import { lucia } from '@/lib/lucia'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import type { NextRequest } from 'next/server'

export async function GET(req: NextRequest, res: Response) {
	const url = req.nextUrl
	const code = url.searchParams.get('code')
	const state = url.searchParams.get('state')

	if (!code || !state) {
		console.error('no code or state')
		return new Response('Invalid Request', { status: 400 })
	}

	const codeVerifier = cookies().get('codeVerifier')?.value
	const savedState = cookies().get('state')?.value

	if (!codeVerifier || !savedState) {
		console.error('no code verifier or state')
		return new Response('Invalid Request', { status: 400 })
	}

	if (state !== savedState) {
		console.error('state mismatch')
		return new Response('Invalid Request', { status: 400 })
	}

	const { accessToken } = await googleOAuthClient.validateAuthorizationCode(code, codeVerifier)
	const googleResponse = await fetch('https://www.googleapis.com/oauth2/v1/userinfo', {
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
	})

	const googleData = (await googleResponse.json()) as {
		id: string
		email: string
		name: string
		picture: string
	}

	let userId = ''

	// if the email exists in our record, we can create a cookie for them and sign them in
	// if the email doesn't exist, we create a new user, then craete cookie to sign them in

	const [existingUser] = await sql`
		SELECT * FROM public.user
		WHERE email = ${googleData.email}
		LIMIT 1
	`

	if (existingUser) {
		userId = existingUser.id
	} else {
		const [user] = await sql`
			INSERT INTO public.user (name, email, picture)
			VALUES (${googleData.name}, ${googleData.email}, ${googleData.picture})
			RETURNING *
		`
		userId = user.id
	}

	const session = await lucia.createSession(userId, {})
	const sessionCookie = await lucia.createSessionCookie(session.id)
	cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)

	return redirect('/home')
}
