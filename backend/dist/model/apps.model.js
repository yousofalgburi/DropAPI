"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apps = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.apps = (0, pg_core_1.pgTable)('apps', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    name: (0, pg_core_1.varchar)('name', { length: 255 }).notNull(),
    identifier: (0, pg_core_1.varchar)('identifier', { length: 255 }).notNull(),
    description: (0, pg_core_1.text)('description'),
    userId: (0, pg_core_1.varchar)('user_id', { length: 255 }).notNull(),
    createdAt: (0, pg_core_1.timestamp)('created_at').defaultNow().notNull(),
    updatedAt: (0, pg_core_1.timestamp)('updated_at').defaultNow().notNull()
});
