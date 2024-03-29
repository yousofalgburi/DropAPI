import Fastify from 'fastify'
import { appsRoutes } from './routes/apps.routes'
import dotenv from 'dotenv'

dotenv.config()
const server = Fastify()

server.register(appsRoutes)

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
