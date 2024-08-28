'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'

import type { z } from 'zod'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { signInSchema } from '@/lib/validators/auth'
import { signIn } from './auth.action'

const SignInForm = () => {
	const [isLoading, setIsLoading] = useState(false)

	const router = useRouter()
	const form = useForm<z.infer<typeof signInSchema>>({
		resolver: zodResolver(signInSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	})

	async function onSubmit(values: z.infer<typeof signInSchema>) {
		setIsLoading(true)
		const res = await signIn(values)
		setIsLoading(false)
		if (res.success) {
			toast.success('Login successful')
			router.push('/home')
		} else {
			toast.error(res.error)
		}
		console.log(values)
	}

	return (
		<Card className='w-full'>
			<CardHeader>
				<CardTitle>Welcome back!</CardTitle>
				<CardDescription>Sign in to your account to continue.</CardDescription>
			</CardHeader>
			<CardContent className='space-y-4'>
				<Form {...form}>
					<form className='flex flex-col gap-4' onSubmit={form.handleSubmit(onSubmit)}>
						<FormField
							control={form.control}
							name='email'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input type='email' placeholder='Enter your email...' {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='password'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Password</FormLabel>
									<FormControl>
										<Input
											type='password'
											placeholder='Enter your password...'
											{...field}
											onChange={(e) => {
												e.target.value = e.target.value.trim()
												field.onChange(e)
											}}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type='submit' className='self-start' disabled={isLoading}>
							Login
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	)
}

export default SignInForm
