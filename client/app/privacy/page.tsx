import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const PrivacyPolicyPage = () => {
	return (
		<div className='container mx-auto py-12'>
			<Card>
				<CardHeader>
					<CardTitle className='text-3xl font-bold'>Privacy Policy</CardTitle>
				</CardHeader>
				<CardContent className='prose dark:prose-invert max-w-none'>
					<p className='text-lg mb-6'>Last updated: {new Date().toLocaleDateString()}</p>

					<h2 className='text-2xl font-semibold mt-8 mb-4'>1. Introduction</h2>
					<p>
						DropAPI ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use,
						disclose, and safeguard your information when you use our website and services.
					</p>

					<h2 className='text-2xl font-semibold mt-8 mb-4'>2. Information We Collect</h2>
					<p>We collect information that you provide directly to us, including:</p>
					<ul className='list-disc pl-6 mb-4'>
						<li>Personal information (e.g., name, email address, phone number)</li>
						<li>LinkedIn account credentials</li>
						<li>Resume and job application details</li>
						<li>Usage data and analytics</li>
					</ul>

					<h2 className='text-2xl font-semibold mt-8 mb-4'>3. How We Use Your Information</h2>
					<p>We use the information we collect to:</p>
					<ul className='list-disc pl-6 mb-4'>
						<li>Provide, maintain, and improve our services</li>
						<li>Process job applications on your behalf</li>
						<li>Communicate with you about our services</li>
						<li>Analyze usage patterns and improve user experience</li>
						<li>Comply with legal obligations</li>
					</ul>

					<h2 className='text-2xl font-semibold mt-8 mb-4'>4. Data Sharing and Disclosure</h2>
					<p>We may share your information with:</p>
					<ul className='list-disc pl-6 mb-4'>
						<li>Third-party service providers that perform services on our behalf</li>
						<li>Potential employers when submitting job applications</li>
						<li>Legal authorities when required by law</li>
					</ul>

					<h2 className='text-2xl font-semibold mt-8 mb-4'>5. Data Security</h2>
					<p>
						We implement appropriate technical and organizational measures to protect your information. However, no method of transmission
						over the Internet or electronic storage is 100% secure.
					</p>

					<h2 className='text-2xl font-semibold mt-8 mb-4'>6. Your Rights and Choices</h2>
					<p>You have the right to:</p>
					<ul className='list-disc pl-6 mb-4'>
						<li>Access, correct, or delete your personal information</li>
						<li>Object to or restrict certain processing of your data</li>
						<li>Data portability</li>
						<li>Withdraw consent at any time</li>
					</ul>

					<h2 className='text-2xl font-semibold mt-8 mb-4'>7. Children's Privacy</h2>
					<p>
						Our services are not intended for children under 16. We do not knowingly collect personal information from children under 16.
					</p>

					<h2 className='text-2xl font-semibold mt-8 mb-4'>8. International Data Transfers</h2>
					<p>
						Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in
						place for such transfers.
					</p>

					<h2 className='text-2xl font-semibold mt-8 mb-4'>9. Changes to This Privacy Policy</h2>
					<p>
						We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on
						this page and updating the "Last updated" date.
					</p>

					<h2 className='text-2xl font-semibold mt-8 mb-4'>10. Third-Party Links and Services</h2>
					<p>
						Our services may contain links to third-party websites or services. We are not responsible for the privacy practices of these
						third parties.
					</p>

					<h2 className='text-2xl font-semibold mt-8 mb-4'>11. Data Retention</h2>
					<p>
						We retain your personal information for as long as necessary to provide our services and comply with legal obligations. You
						can request deletion of your data at any time.
					</p>

					<h2 className='text-2xl font-semibold mt-8 mb-4'>12. Cookies and Tracking Technologies</h2>
					<p>
						We use cookies and similar tracking technologies to collect and track information about your usage of our services. You can
						control cookies through your browser settings.
					</p>

					<h2 className='text-2xl font-semibold mt-8 mb-4'>13. Contact Us</h2>
					<p>If you have any questions about this Privacy Policy, please contact us at:</p>
					<p className='mb-4'>Email: privacy@dropapi.com</p>
				</CardContent>
			</Card>
		</div>
	)
}

export default PrivacyPolicyPage
