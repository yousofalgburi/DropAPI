import postgres from 'postgres'
import 'dotenv/config'

const sql = postgres(process.env.DATABASE_URL, {
	ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
	max: 10,
	idle_timeout: 20,
	connect_timeout: 30,
	prepare: true,
	onnotice: console.log,
	debug: process.env.NODE_ENV !== 'production' ? console.log : false,
	connection: {
		application_name: 'dropapi',
	},
	fetch_types: true,
})

process.on('SIGINT', async () => {
	console.log('Closing database connections...')
	await sql.end({ timeout: 5 })
	process.exit(0)
})

export default sql
