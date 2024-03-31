import { FastifyReply, FastifyRequest, HookHandlerDoneFunction } from 'fastify'
import { verifyToken } from '../service/auth'

export function authMiddleware(request: FastifyRequest, reply: FastifyReply, done: HookHandlerDoneFunction) {
	const token = request.headers.authorization

	if (!token) {
		reply.status(401).send({ error: 'No token provided' })
		return
	}

	try {
		verifyToken(token)
		done()
	} catch (error) {
		reply.status(401).send({ error: 'Invalid token' })
	}
}
