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
import { signUpSchema } from '@/lib/validators/auth'
import { signUp } from './auth.action'

const SignUpForm = () => {
	const [isLoading, setIsLoading] = useState(false)

	const router = useRouter()
	const form = useForm<z.infer<typeof signUpSchema>>({
		resolver: zodResolver(signUpSchema),
		defaultValues: {
			confirmPassword: '',
			name: '',
			email: '',
			password: '',
		},
	})

	async function onSubmit(values: z.infer<typeof signUpSchema>) {
		setIsLoading(true)
		const res = await signUp(values)
		setIsLoading(false)
		if (res.success) {
			toast.success(res.message || 'Account created successfully')
		} else {
			toast.error(res.error)
		}
	}

	return (
		<Card className='w-full'>
			<CardHeader>
				<CardTitle>Begin your journey...</CardTitle>
				<CardDescription>Create your account to continue.</CardDescription>
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
							name='name'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Name</FormLabel>
									<FormControl>
										<Input placeholder='Enter your name...' {...field} />
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
						<FormField
							control={form.control}
							name='confirmPassword'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Confirm password</FormLabel>
									<FormControl>
										<Input
											type='password'
											placeholder='Please confirm your password'
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
						<p className='text-sm text-muted-foreground'>By creating an account, you agree to our Terms of Service and Privacy Policy.</p>
						<Button type='submit' className='w-full' disabled={isLoading}>
							Sign Up
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	)
}

export default SignUpForm
