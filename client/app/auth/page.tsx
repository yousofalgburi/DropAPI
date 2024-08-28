import TabSwitcher from '@/components/TabSwitcher'
import React from 'react'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'
import RequestPasswordResetForm from './RequestPasswordResetForm'
import { redirect } from 'next/navigation'
import GoogleOAuthButton from '@/components/GoogleOAuthButton'
import { getUser } from '@/lib/lucia'

export default async function AuthenticatePage() {
	const user = await getUser()

	if (user) {
		return redirect('/home')
	}

	return (
		<div className='flex flex-col justify-start min-h-screen bg-background pt-36'>
			<div className='w-full max-w-md px-4 py-8 mx-auto'>
				<GoogleOAuthButton />

				<div className='h-4' />

				<TabSwitcher SignInTab={<SignInForm />} SignUpTab={<SignUpForm />} ForgotPasswordTab={<RequestPasswordResetForm />} />
			</div>
		</div>
	)
}
