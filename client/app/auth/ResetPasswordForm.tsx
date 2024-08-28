'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { zodResolver } from '@hookform/resolvers/zod'
import type React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { z } from 'zod'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { resetPassword } from './auth.action'

const resetPasswordSchema = z
	.object({
		password: z.string().min(8, 'Password must be at least 8 characters'),
		confirmPassword: z.string(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords don't match",
		path: ['confirmPassword'],
	})

interface ResetPasswordFormProps {
	token: string
}

const ResetPasswordForm: React.FC<ResetPasswordFormProps> = ({ token }) => {
	const [isLoading, setIsLoading] = useState(false)
	const router = useRouter()

	const form = useForm<z.infer<typeof resetPasswordSchema>>({
		resolver: zodResolver(resetPasswordSchema),
		defaultValues: {
			password: '',
			confirmPassword: '',
		},
	})

	async function onSubmit(values: z.infer<typeof resetPasswordSchema>) {
		setIsLoading(true)
		const res = await resetPassword(token, values.password)
		setIsLoading(false)
		if (res.success) {
			toast.success(res.message || 'Password reset successfully')
			router.push('/auth')
		} else {
			toast.error(res.error)
		}
	}

	return (
		<Card className='w-full'>
			<CardHeader>
				<CardTitle>Reset Your Password</CardTitle>
				<CardDescription>Enter your new password below.</CardDescription>
			</CardHeader>
			<CardContent className='space-y-4'>
				<Form {...form}>
					<form className='flex flex-col gap-4' onSubmit={form.handleSubmit(onSubmit)}>
						<FormField
							control={form.control}
							name='password'
							render={({ field }) => (
								<FormItem>
									<FormLabel>New Password</FormLabel>
									<FormControl>
										<Input type='password' placeholder='Enter new password...' {...field} />
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
									<FormLabel>Confirm New Password</FormLabel>
									<FormControl>
										<Input type='password' placeholder='Confirm new password...' {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type='submit' className='w-full' disabled={isLoading}>
							Reset Password
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	)
}

export default ResetPasswordForm
