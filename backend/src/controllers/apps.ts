import { FastifyReply, FastifyRequest } from 'fastify'
import { apps } from '../db/schema'
import db from '../lib/db'
import { CreateAppRequest } from '../types/apps'

export async function createApp(request: FastifyRequest, reply: FastifyReply) {
	const { name, identifier, description, userId } = request.body as CreateAppRequest

	if (!name || !identifier || !description || !userId) {
		return reply.status(400).send({ error: 'Missing required fields' })
	}

	try {
		const [app] = await db
			.insert(apps)
			.values({
				name: name as string,
				description: description as string,
				identifier: identifier as string,
				userId: parseInt(userId)
			})
			.returning()

		return reply.status(201).send(app)
	} catch (error) {
		console.log(error)
		return reply.status(500).send({ error: 'Failed to create app' })
	}
}
