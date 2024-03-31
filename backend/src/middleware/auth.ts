import { FastifyReply, FastifyRequest, HookHandlerDoneFunction } from 'fastify'
import jwt from 'jsonwebtoken'
const secret = process.env.SECRET!

export default function auth(request: FastifyRequest, reply: FastifyReply, done: HookHandlerDoneFunction) {
	const token = request.headers.authorization?.split(' ')[1]

	try {
		if (token !== undefined) {
			const decodedData = jwt.verify(token, secret)

			if (!decodedData) {
				return reply.status(401).send({ error: 'Invalid token' })
			}
		} else {
			return reply.status(401).send({ error: 'Invalid token' })
		}

		done()
	} catch (error) {
		console.log(error)
		return reply.status(401).send({ error: 'Invalid token' })
	}
}
