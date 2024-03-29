import { drizzle } from 'drizzle-orm/node-postgres'
import { getXataClient } from './xata'

const xata = getXataClient()
const db = drizzle(xata)

export default db
