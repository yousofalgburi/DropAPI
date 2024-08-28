'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import type React from 'react'

interface Props {
	SignUpTab: React.ReactNode
	SignInTab: React.ReactNode
	ForgotPasswordTab: React.ReactNode
}

function TabSwitcher({ SignUpTab, SignInTab, ForgotPasswordTab }: Props) {
	return (
		<Tabs className='max-w-[500px]' defaultValue='sign-in'>
			<TabsList className='grid w-full grid-cols-3'>
				<TabsTrigger value='sign-in'>Sign In</TabsTrigger>
				<TabsTrigger value='sign-up'>Sign Up</TabsTrigger>
				<TabsTrigger value='forgot-password'>Forgot Password</TabsTrigger>
			</TabsList>

			<TabsContent value='sign-in'>{SignInTab}</TabsContent>
			<TabsContent value='sign-up'>{SignUpTab}</TabsContent>
			<TabsContent value='forgot-password'>{ForgotPasswordTab}</TabsContent>
		</Tabs>
	)
}

export default TabSwitcher
