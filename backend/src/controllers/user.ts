import { FastifyReply, FastifyRequest } from 'fastify'
import db from '../lib/db'
import { users } from '../db/schema'
import { eq } from 'drizzle-orm'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { UserSignInRequest, UserSignUpRequest } from '../types/user'

const secret = process.env.SECRET!

export async function SignIn(request: FastifyRequest, reply: FastifyReply) {
	const { email, password } = request.body as UserSignInRequest

	if (!email || !password) {
		return reply.code(400).send({ message: 'Email and password are required' })
	}

	try {
		const [user] = await db.selectDistinct().from(users).where(eq(users.email, email))

		console.log(user)

		if (!user) {
			return reply.code(404).send({ message: 'User not found' })
		}

		const isPasswordCorrect = await bcrypt.compare(password, user.password)

		if (!isPasswordCorrect) {
			return reply.code(400).send({ message: 'Invalid credentials' })
		}

		const token = jwt.sign({ email: user.email, id: user.id }, secret, {
			expiresIn: '12h'
		})

		return reply.code(200).send({ result: user, token })
	} catch (error) {
		console.log(error)
		return reply.code(500).send({ message: 'Something went wrong' })
	}
}

export async function SignUp(request: FastifyRequest, reply: FastifyReply) {
	const { name, email, password, confirmPassword } = request.body as UserSignUpRequest

	if (!name || !email || !password || !confirmPassword) {
		return reply.code(400).send({ message: 'All fields are required' })
	}

	try {
		const [user] = await db.selectDistinct().from(users).where(eq(users.email, email))

		if (user) {
			return reply.code(400).send({ message: 'User already exists' })
		}

		if (password !== confirmPassword) {
			return reply.code(400).send({ message: 'Passwords do not match' })
		}

		const hashedPassword = await bcrypt.hash(password, 10)

		const result = await db
			.insert(users)
			.values({
				name,
				email,
				password: hashedPassword
			})
			.returning()

		const token = jwt.sign({ email: result[0].email, id: result[0].id }, secret, {
			expiresIn: '12h'
		})

		return reply.code(201).send({ result, token })
	} catch (error) {
		return reply.code(500).send({ message: 'Something went wrong' })
	}
}
