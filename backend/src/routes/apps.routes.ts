import { FastifyInstance } from 'fastify'
import { createApp } from '../controllers/apps.controller'
import { authMiddleware } from '../middleware/auth.middleware'

export async function appsRoutes(server: FastifyInstance) {
	server.post('/apps', { preHandler: [authMiddleware] }, createApp)
}
