import { Lucia } from 'lucia'
import { PostgresJsAdapter } from '@lucia-auth/adapter-postgresql'
import { cookies } from 'next/headers'
import sql from '../db'
import type { User } from '@/types/user'

const adapter = new PostgresJsAdapter(sql, {
	session: 'session',
	user: 'user',
})

export const lucia = new Lucia(adapter, {
	sessionCookie: {
		name: 'elliott-auth-cookie',
		expires: false,
		attributes: {
			secure: process.env.NODE_ENV === 'production',
		},
	},
})

export const getUser = async () => {
	const sessionId = cookies().get(lucia.sessionCookieName)?.value || null
	if (!sessionId) {
		return null
	}

	const { session, user } = await lucia.validateSession(sessionId)
	try {
		if (session?.fresh) {
			// refreshing their session cookie
			const sessionCookie = await lucia.createSessionCookie(session.id)
			cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
		}

		if (!session) {
			const sessionCookie = await lucia.createBlankSessionCookie()
			cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
		}
	} catch (error) {}

	if (!user) {
		return null
	}

	const [dbUser] = await sql`
		SELECT id, name, email, picture, job_config_completed, resume_info_completed, linkedin_info_completed
        FROM public.user 
        WHERE id = ${user?.id}
	`

	return dbUser as User
}
