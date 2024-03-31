import { FastifyInstance } from 'fastify'
import { createApp } from '../controllers/apps'
import auth from '../middleware/auth'

export async function appsRoutes(server: FastifyInstance) {
	server.post('/apps', { preHandler: [auth] }, createApp)
	server.get('/apps', { preHandler: [auth] }, createApp)
	server.get('/apps/:id', { preHandler: [auth] }, createApp)
}
