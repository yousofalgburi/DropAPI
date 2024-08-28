import fs from 'node:fs/promises'
import path from 'node:path'
import sql from '@/db'

const MIGRATIONS_DIR = path.join(process.cwd(), 'db/migrations')

async function getMigrationFiles() {
	const files = await fs.readdir(MIGRATIONS_DIR)
	return files.filter((file) => file.endsWith('.sql')).sort()
}

async function createMigrationsTable() {
	await sql`
    CREATE TABLE IF NOT EXISTS migrations (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      executed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `
}

async function getExecutedMigrations() {
	const rows = await sql`SELECT name FROM migrations`
	return rows.map((row) => row.name)
}

async function executeMigration(fileName: string) {
	const filePath = path.join(MIGRATIONS_DIR, fileName)
	const migrationSql = await fs.readFile(filePath, 'utf-8')

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	await sql.begin(async (sql: any) => {
		await sql.unsafe(migrationSql)
		await sql`INSERT INTO migrations (name) VALUES (${fileName})`
	})

	console.log(`Executed migration: ${fileName}`)
}

export async function runMigrations() {
	await createMigrationsTable()
	const executedMigrations = await getExecutedMigrations()
	const migrationFiles = await getMigrationFiles()

	for (const file of migrationFiles) {
		if (!executedMigrations.includes(file)) {
			try {
				await executeMigration(file)
			} catch (error) {
				console.error(`Failed to execute migration ${file}:`, error)
				throw error
			}
		}
	}

	console.log('All migrations executed successfully')
	process.exit(0)
}

runMigrations().catch(console.error)
