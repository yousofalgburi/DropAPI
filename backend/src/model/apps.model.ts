import { pgTable, serial, varchar, text, timestamp } from 'drizzle-orm/pg-core'

export const apps = pgTable('apps', {
	id: serial('id').primaryKey(),
	name: varchar('name', { length: 255 }).notNull(),
	identifier: varchar('identifier', { length: 255 }).notNull(),
	description: text('description'),
	userId: varchar('user_id', { length: 255 }).notNull(),
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at').defaultNow().notNull()
})
