import { FastifyReply, FastifyRequest } from 'fastify'
import { appsService } from '../service/apps.service'

interface bodyInterface {
	name: string
	identifier: string
	description: string
	userId: string
}

export async function createApp(request: FastifyRequest, reply: FastifyReply) {
	const { name, identifier, description, userId } = request.body as bodyInterface

	if (!name || !identifier || !description) {
		reply.status(400).send({ error: 'Missing required fields' })
		return
	}

	try {
		const app = await appsService.createApp({ name, identifier, description, userId: userId })
		reply.status(201).send(app)
	} catch (error) {
		reply.status(500).send({ error: 'Failed to create app' })
	}
}
