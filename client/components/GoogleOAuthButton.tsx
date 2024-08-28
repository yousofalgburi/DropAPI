'use client'

import React, { useState } from 'react'
import { Button } from './ui/button'
import { RiGoogleFill } from '@remixicon/react'
import { getGoogleOauthConsentUrl } from '@/app/auth/auth.action'
import { toast } from 'sonner'

const GoogleOAuthButton = () => {
	const [isLoading, setIsLoading] = useState(false)

	return (
		<Button
			disabled={isLoading}
			onClick={async () => {
				setIsLoading(true)
				const res = await getGoogleOauthConsentUrl()
				setIsLoading(false)
				if (res.url) {
					window.location.href = res.url
				} else {
					toast.error(res.error)
				}
			}}
		>
			<RiGoogleFill className='w-4 h-4 mr-2' /> Continue with Google!
		</Button>
	)
}

export default GoogleOAuthButton
