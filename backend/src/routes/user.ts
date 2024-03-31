import { FastifyInstance } from 'fastify'
import { SignIn, SignUp } from '../controllers/user'

export async function userRoutes(server: FastifyInstance) {
	server.post('/signin', SignIn)
	server.post('/signup', SignUp)
}
