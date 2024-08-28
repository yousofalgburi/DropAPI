'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { z } from 'zod'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { requestPasswordReset } from './auth.action'

const requestPasswordResetSchema = z.object({
	email: z.string().email('Invalid email address'),
})

const RequestPasswordResetForm = () => {
	const [isLoading, setIsLoading] = useState(false)

	const form = useForm<z.infer<typeof requestPasswordResetSchema>>({
		resolver: zodResolver(requestPasswordResetSchema),
		defaultValues: {
			email: '',
		},
	})

	async function onSubmit(values: z.infer<typeof requestPasswordResetSchema>) {
		setIsLoading(true)
		const res = await requestPasswordReset(values.email)
		setIsLoading(false)
		if (res.success) {
			toast.success(res.message || 'Password reset email sent')
		} else {
			toast.error(res.error)
		}
	}

	return (
		<Card className='w-full'>
			<CardHeader>
				<CardTitle>Reset Password</CardTitle>
				<CardDescription>Enter your email to receive a password reset link.</CardDescription>
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
						<Button type='submit' className='w-full' disabled={isLoading}>
							Send Reset Link
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	)
}

export default RequestPasswordResetForm
