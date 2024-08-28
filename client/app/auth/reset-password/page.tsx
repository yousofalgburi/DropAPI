import React from 'react'
import ResetPasswordForm from '../ResetPasswordForm'
import { redirect } from 'next/navigation'
import { getUser } from '@/lib/lucia'

export default async function ResetPasswordPage({
	searchParams,
}: {
	searchParams: { token: string }
}) {
	const user = await getUser()

	if (user) {
		return redirect('/home')
	}

	if (!searchParams.token) {
		return redirect('/auth')
	}

	return (
		<div className='flex flex-col justify-start min-h-screen bg-background pt-36'>
			<div className='w-full max-w-md px-4 py-8 mx-auto'>
				<ResetPasswordForm token={searchParams.token} />
			</div>
		</div>
	)
}
