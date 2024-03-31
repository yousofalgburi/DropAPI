import Fastify from 'fastify'
import dotenv from 'dotenv'
import { userRoutes } from './routes/user'

dotenv.config()

const server = Fastify()

server.register(userRoutes)

const start = async () => {
	try {
		await server.listen({ port: 3000 })
		console.log(`Server listening on port 3000`)
	} catch (err) {
		console.error(err)
		process.exit(1)
	}
}

start()
