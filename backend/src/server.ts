import 'dotenv/config'
import Fastify from 'fastify'
import { userRoutes } from './routes/user'
import { appsRoutes } from './routes/apps'

const server = Fastify()

server.register(userRoutes)
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
