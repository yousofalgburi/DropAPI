import db from '../lib/db'
import { apps } from '../model/apps.model'

interface appDataInterface {
	name: string
	identifier: string
	description: string
	userId: string
}

export const appsService = {
	createApp: async (appData: appDataInterface) => {
		const result = await db.insert(apps).values(appData).returning()
		return result
	}
}
