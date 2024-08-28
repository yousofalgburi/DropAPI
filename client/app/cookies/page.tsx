import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const CookiePolicyPage = () => {
	return (
		<div className='container mx-auto py-12'>
			<Card>
				<CardHeader>
					<CardTitle className='text-3xl font-bold'>Cookie Policy</CardTitle>
				</CardHeader>
				<CardContent className='prose dark:prose-invert max-w-none'>
					<p className='text-lg mb-6'>Last updated: {new Date().toLocaleDateString()}</p>

					<h2 className='text-2xl font-semibold mt-8 mb-4'>1. Introduction</h2>
					<p>
						This Cookie Policy explains how DropAPI ("we", "us", or "our") uses cookies and similar technologies to recognize you when you
						visit our website and use our services. It explains what these technologies are and why we use them, as well as your rights to
						control our use of them.
					</p>

					<h2 className='text-2xl font-semibold mt-8 mb-4'>2. What are cookies?</h2>
					<p>
						Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely
						used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting
						information.
					</p>

					<h2 className='text-2xl font-semibold mt-8 mb-4'>3. Why do we use cookies?</h2>
					<p>
						We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for
						our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies enable us to track
						and target the interests of our users to enhance the experience on our website. Third parties serve cookies through our
						website for advertising, analytics, and other purposes.
					</p>

					<h2 className='text-2xl font-semibold mt-8 mb-4'>4. Types of cookies we use</h2>
					<ul className='list-disc pl-6 mb-4'>
						<li>
							<strong>Essential cookies:</strong> These cookies are strictly necessary to provide you with services available through
							our website and to use some of its features, such as access to secure areas.
						</li>
						<li>
							<strong>Performance and functionality cookies:</strong> These cookies are used to enhance the performance and
							functionality of our website but are non-essential to their use.
						</li>
						<li>
							<strong>Analytics and customization cookies:</strong> These cookies collect information that is used either in aggregate
							form to help us understand how our website is being used or how effective our marketing campaigns are, or to help us
							customize our website for you.
						</li>
						<li>
							<strong>Advertising cookies:</strong> These cookies are used to make advertising messages more relevant to you. They
							perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for
							advertisers, and in some cases selecting advertisements that are based on your interests.
						</li>
						<li>
							<strong>Social networking cookies:</strong> These cookies are used to enable you to share pages and content that you find
							interesting on our website through third-party social networking and other websites.
						</li>
					</ul>

					<h2 className='text-2xl font-semibold mt-8 mb-4'>5. How can you control cookies?</h2>
					<p>
						You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by clicking on the
						appropriate opt-out links provided in the cookie banner or by setting or amending your web browser controls to accept or
						refuse cookies.
					</p>
					<p>
						If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our
						website may be restricted. You may also set or amend your web browser controls to accept or refuse cookies.
					</p>

					<h2 className='text-2xl font-semibold mt-8 mb-4'>6. Third-Party Cookies</h2>
					<p>
						In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the service, deliver
						advertisements on and through the service, and so on. The specific third-party cookies we use may vary over time, but may
						include:
					</p>
					<ul className='list-disc pl-6 mb-4'>
						<li>Google Analytics</li>
						<li>Facebook Pixel</li>
						<li>LinkedIn Insight Tag</li>
						<li>HubSpot</li>
					</ul>

					<h2 className='text-2xl font-semibold mt-8 mb-4'>7. Updates to this policy</h2>
					<p>
						We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for
						other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about
						our use of cookies and related technologies.
					</p>

					<h2 className='text-2xl font-semibold mt-8 mb-4'>8. Do Not Track</h2>
					<p>
						Some browsers have incorporated "Do Not Track" (DNT) features. Most of these features, when turned on, send a signal or
						preference to the websites you visit indicating that you do not wish to be tracked. At this time, our website does not respond
						to DNT signals.
					</p>

					<h2 className='text-2xl font-semibold mt-8 mb-4'>9. More information</h2>
					<p>If you have questions about our use of cookies or other technologies, please contact us at:</p>
					<p className='mb-4'>Email: privacy@dropapi.com</p>
				</CardContent>
			</Card>
		</div>
	)
}

export default CookiePolicyPage
