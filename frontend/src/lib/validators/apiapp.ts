import { z } from 'zod'

export const APIAppValidator = z.object({
	name: z
		.string()
		.min(3)
		.max(32)
		.regex(/^[a-zA-Z0-9_]+$/),
	identifier: z
		.string()
		.min(3)
		.max(32)
		.regex(/^[a-z0-9_-]+$/, { message: 'Only lowercase letters, numbers, hyphens, and underscores are allowed.' }),
	description: z
		.string()
		.min(0)
		.max(128)
		.regex(/^[a-zA-Z0-9_]+$/),
})
