import { buildClient } from '@xata.io/client'
import type { BaseClientOptions, SchemaInference, XataRecord } from '@xata.io/client'

import dotenv from 'dotenv'
dotenv.config()

const tables = [] as const

export type SchemaTables = typeof tables
export type InferredTypes = SchemaInference<SchemaTables>

export type DatabaseSchema = {}

const DatabaseClient = buildClient()

const defaultOptions = {
	databaseURL: 'https://Yousof-Algburi-s-workspace-4iv5up.us-east-1.xata.sh/db/dropapi'
}

export class XataClient extends DatabaseClient<DatabaseSchema> {
	constructor(options?: BaseClientOptions) {
		super({ ...defaultOptions, ...options }, tables)
	}
}

let instance: XataClient | undefined = undefined

export const getXataClient = () => {
	if (instance) return instance

	instance = new XataClient({ apiKey: process.env.XATA_API_KEY, branch: process.env.XATA_BRANCH })

	return instance
}
