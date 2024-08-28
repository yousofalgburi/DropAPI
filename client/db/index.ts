import postgres from 'postgres'

const sql = postgres(process.env.DATABASE_URL, {
	max: 10,
	idle_timeout: 20,
	connect_timeout: 30,
	prepare: true,
	onnotice: console.log,
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
