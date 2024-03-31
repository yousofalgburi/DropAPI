import 'dotenv/config'
import { drizzle } from 'drizzle-orm/postgres-js'
import { migrate } from 'drizzle-orm/postgres-js/migrator'
import postgres from 'postgres'

const connectionString = process.env.DATABASE_URL!
const sql = postgres(connectionString, { max: 1 })
const db = drizzle(sql)

const runMigration = async () => {
	await migrate(db, { migrationsFolder: 'drizzle' })
	await sql.end()
}

runMigration()
