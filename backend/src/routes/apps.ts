import { FastifyInstance } from 'fastify'
import { createApp } from '../controllers/apps'
import { authMiddleware } from '../middleware/auth'

export async function appsRoutes(server: FastifyInstance) {
	server.post('/apps', { preHandler: [authMiddleware] }, createApp)
}
