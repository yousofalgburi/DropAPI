import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const TermsOfServicePage = () => {
	return (
		<div className='container mx-auto py-12'>
			<Card>
				<CardHeader>
					<CardTitle className='text-3xl font-bold'>Terms of Service</CardTitle>
				</CardHeader>
				<CardContent className='prose dark:prose-invert max-w-none'>
					<p className='text-lg mb-6'>Welcome to DropAPI. By using our service, you agree to these terms. Please read them carefully.</p>

					<h2 className='text-2xl font-semibold mt-8 mb-4'>1. Acceptance of Terms</h2>
					<p>
						By accessing or using DropAPI, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you
						do not agree with any part of these terms, you may not use our service.
					</p>

					<h2 className='text-2xl font-semibold mt-8 mb-4'>2. Description of Service</h2>
					<p>
						DropAPI provides AI-powered Twitter automation tools to assist in job applications and professional networking. We reserve the
						right to modify or discontinue the service at any time without notice.
					</p>

					<h2 className='text-2xl font-semibold mt-8 mb-4'>3. User Responsibilities</h2>
					<p>
						You are responsible for maintaining the confidentiality of your account information and for all activities that occur under
						your account. You agree to use the service in compliance with all applicable laws and LinkedIn's terms of service.
					</p>

					<h2 className='text-2xl font-semibold mt-8 mb-4'>4. Privacy and Data Usage</h2>
					<p>
						Your use of DropAPI is also governed by our Privacy Policy. By using our service, you consent to the collection and use of
						your information as described therein.
					</p>

					<h2 className='text-2xl font-semibold mt-8 mb-4'>5. Limitation of Liability</h2>
					<p>
						DropAPI is provided "as is" without warranties of any kind. We are not responsible for any consequences resulting from your
						use of our service, including any actions taken by LinkedIn in response to your automated activities.
					</p>

					<h2 className='text-2xl font-semibold mt-8 mb-4'>6. Modifications to Terms</h2>
					<p>
						We reserve the right to modify these terms at any time. Your continued use of DropAPI after any changes indicates your
						acceptance of the modified terms.
					</p>

					<h2 className='text-2xl font-semibold mt-8 mb-4'>7. Termination</h2>
					<p>
						We reserve the right to terminate or suspend your account and access to DropAPI at our sole discretion, without notice, for
						conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties, or for any other
						reason.
					</p>

					<h2 className='text-2xl font-semibold mt-8 mb-4'>8. Contact Information</h2>
					<p>If you have any questions about these Terms of Service, please contact us at support@dropapi.com.</p>

					<p className='mt-8 text-sm text-muted-foreground'>Last updated: {new Date().toLocaleDateString()}</p>
				</CardContent>
			</Card>
		</div>
	)
}

export default TermsOfServicePage
