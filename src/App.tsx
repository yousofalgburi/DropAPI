import { useState, useEffect } from 'react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Cpu, Globe, Zap, Shield, BarChart, Code, Menu, Sun, Moon, ArrowRight } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'

const Feature = ({ icon, title, description }: { icon: JSX.Element; title: string; description: string }) => (
	<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
		<Card className='bg-white/10 dark:bg-black/30 backdrop-blur-lg border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300'>
			<CardHeader>
				<div className='flex items-center space-x-2'>
					<motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
						{icon}
					</motion.div>
					<CardTitle className='text-gray-800 dark:text-white'>{title}</CardTitle>
				</div>
			</CardHeader>
			<CardContent>
				<CardDescription className='text-gray-600 dark:text-gray-300'>{description}</CardDescription>
			</CardContent>
		</Card>
	</motion.div>
)

export default function App() {
	const [darkMode, setDarkMode] = useState(false)
	const { scrollYProgress } = useScroll()
	const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

	useEffect(() => {
		const isDarkMode = window.matchMedia?.('(prefers-color-scheme: dark)').matches
		setDarkMode(isDarkMode)
	}, [])

	const toggleDarkMode = () => {
		setDarkMode(!darkMode)
		document.documentElement.classList.toggle('dark')
	}

	return (
		<div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
			<div className='relative bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black text-gray-900 dark:text-white overflow-hidden transition-colors duration-300'>
				<motion.div
					className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZjNmNGY2Ij48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiNlNWU3ZWIiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMjEyMTIxIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMzYTNhM2EiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')]"
					style={{ y: backgroundY }}
				/>

				<header className='container mx-auto px-4 py-8 relative'>
					<nav className='flex justify-between items-center'>
						<motion.h1
							className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400'
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
						>
							DropAPI
						</motion.h1>
						<motion.div
							className='hidden md:flex space-x-4 items-center'
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
						>
							<Button variant='ghost' className='text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'>
								Features
							</Button>
							<Button variant='ghost' className='text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'>
								Pricing
							</Button>
							<Button variant='ghost' className='text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'>
								Docs
							</Button>
							<Button className='bg-blue-600 hover:bg-blue-700 text-white'>Get Started</Button>
							<Button variant='ghost' size='icon' onClick={toggleDarkMode}>
								{darkMode ? <Sun className='h-5 w-5' /> : <Moon className='h-5 w-5' />}
							</Button>
						</motion.div>
						<div className='md:hidden flex items-center space-x-2'>
							<Button variant='ghost' size='icon' onClick={toggleDarkMode}>
								{darkMode ? <Sun className='h-5 w-5' /> : <Moon className='h-5 w-5' />}
							</Button>
							<Button variant='ghost' size='icon'>
								<Menu className='h-6 w-6' />
							</Button>
						</div>
					</nav>
				</header>

				<main className='container flex gap-20 flex-col mx-auto px-4 py-16 relative'>
					<section className='text-center mb-16'>
						<motion.h2
							className='text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.4 }}
						>
							Drop the Complexity, <br />
							Elevate Your API
						</motion.h2>
						<motion.p
							className='text-xl text-gray-600 dark:text-gray-300 mb-8'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.6 }}
						>
							Rapidly develop, deploy, and scale your APIs with our cutting-edge, AI-driven platform.
						</motion.p>
						<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.8 }}>
							<Button
								size='lg'
								className='text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300'
							>
								Start Building for Free
							</Button>
						</motion.div>
					</section>

					<motion.section
						className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 1 }}
					>
						<Feature
							icon={<Cpu className='w-8 h-8 text-blue-500 dark:text-blue-400' />}
							title='AI-Powered Creation'
							description='Let our AI assistant guide you through API design and development, suggesting best practices and optimizations.'
						/>
						<Feature
							icon={<Globe className='w-8 h-8 text-green-500 dark:text-green-400' />}
							title='Global Edge Distribution'
							description='Deploy your APIs to edge locations worldwide for blazing-fast performance and reduced latency.'
						/>
						<Feature
							icon={<Zap className='w-8 h-8 text-yellow-500 dark:text-yellow-400' />}
							title='Rapid Development'
							description='Use our intuitive tools to build and deploy APIs in minutes, not months. Streamline your workflow with automated processes.'
						/>
						<Feature
							icon={<Shield className='w-8 h-8 text-red-500 dark:text-red-400' />}
							title='Advanced Security'
							description='Protect your APIs with built-in authentication, encryption, and threat detection. Stay compliant with industry standards.'
						/>
						<Feature
							icon={<BarChart className='w-8 h-8 text-purple-500 dark:text-purple-400' />}
							title='Powerful Analytics'
							description='Gain insights with real-time usage statistics, performance metrics, and AI-driven recommendations for optimization.'
						/>
						<Feature
							icon={<Code className='w-8 h-8 text-indigo-500 dark:text-indigo-400' />}
							title='Customizable'
							description='Tailor your API infrastructure with flexible options and integrations. Extend functionality with our plugin ecosystem.'
						/>
					</motion.section>

					<section className='mb-16'>
						<motion.h3
							className='text-4xl font-bold mb-8 text-center'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 1.2 }}
						>
							How DropAPI Works
						</motion.h3>
						<div className='grid md:grid-cols-3 gap-8'>
							<motion.div
								className='text-center'
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 1.4 }}
							>
								<div className='bg-blue-100 dark:bg-blue-900 rounded-full p-6 inline-block mb-4'>
									<Cpu className='w-12 h-12 text-blue-600 dark:text-blue-400' />
								</div>
								<h4 className='text-xl font-semibold mb-2'>1. Design</h4>
								<p className='text-gray-600 dark:text-gray-300'>Use our AI-powered design tools to create your API structure</p>
							</motion.div>
							<motion.div
								className='text-center'
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 1.6 }}
							>
								<div className='bg-purple-100 dark:bg-purple-900 rounded-full p-6 inline-block mb-4'>
									<Code className='w-12 h-12 text-purple-600 dark:text-purple-400' />
								</div>
								<h4 className='text-xl font-semibold mb-2'>2. Develop</h4>
								<p className='text-gray-600 dark:text-gray-300'>
									Implement your API logic with our intuitive development environment
								</p>
							</motion.div>
							<motion.div
								className='text-center'
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 1.8 }}
							>
								<div className='bg-green-100 dark:bg-green-900 rounded-full p-6 inline-block mb-4'>
									<Globe className='w-12 h-12 text-green-600 dark:text-green-400' />
								</div>
								<h4 className='text-xl font-semibold mb-2'>3. Deploy</h4>
								<p className='text-gray-600 dark:text-gray-300'>Deploy your API globally with a single click</p>
							</motion.div>
						</div>
					</section>

					<section className='mb-16'>
						<motion.h3
							className='text-4xl font-bold mb-8 text-center'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 2 }}
						>
							What Our Customers Say
						</motion.h3>
						<div className='grid md:grid-cols-2 gap-8'>
							<motion.div
								className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg'
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 2.2 }}
							>
								<p className='text-gray-600 dark:text-gray-300 mb-4'>
									"DropAPI has revolutionized our development process. We've cut our API development time by 70% and improved
									performance across the board."
								</p>
								<p className='font-semibold'>- Sarah Johnson, CTO at TechNova</p>
							</motion.div>
							<motion.div
								className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg'
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 2.4 }}
							>
								<p className='text-gray-600 dark:text-gray-300 mb-4'>
									"The AI-powered suggestions have been a game-changer for our team. It's like having an expert API designer by your
									side at all times."
								</p>
								<p className='font-semibold'>- Alex Chen, Lead Developer at DataFlow</p>
							</motion.div>
						</div>
					</section>

					<section className='mb-16'>
						<motion.h3
							className='text-4xl font-bold mb-8 text-center'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 2.6 }}
						>
							Pricing Plans
						</motion.h3>
						<div className='grid md:grid-cols-3 gap-8'>
							{[
								{
									name: 'Starter',
									price: '$29',
									features: ['1 million API calls/month', '5 team members', 'Basic analytics', '24/7 support'],
								},
								{
									name: 'Pro',
									price: '$99',
									features: [
										'10 million API calls/month',
										'Unlimited team members',
										'Advanced analytics',
										'Priority support',
										'Custom domain',
									],
								},
								{
									name: 'Enterprise',
									price: 'Custom',
									features: [
										'Unlimited API calls',
										'Dedicated account manager',
										'Custom integrations',
										'On-premise deployment option',
									],
								},
							].map((plan, index) => (
								<motion.div
									key={plan.name}
									className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col'
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: 2.8 + index * 0.2 }}
								>
									<h4 className='text-2xl font-bold mb-4'>{plan.name}</h4>
									<p className='text-4xl font-bold mb-6'>
										{plan.price}
										<span className='text-sm font-normal'>/month</span>
									</p>
									<ul className='mb-6 flex-grow'>
										{plan.features.map((feature, i) => (
											<li key={feature} className='flex items-center mb-2'>
												<ArrowRight className='w-4 h-4 mr-2 text-green-500' />
												<span>{feature}</span>
											</li>
										))}
									</ul>
									<Button className='w-full bg-blue-600 hover:bg-blue-700 text-white'>Choose Plan</Button>
								</motion.div>
							))}
						</div>
					</section>

					<section className='mb-16'>
						<motion.h3
							className='text-4xl font-bold mb-8 text-center'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 3.4 }}
						>
							Frequently Asked Questions
						</motion.h3>
						<div className='grid md:grid-cols-2 gap-8'>
							{[
								{
									q: "How does DropAPI's AI assistant work?",
									a: 'Our AI assistant analyzes your API design and provides suggestions based on best practices and patterns learned from thousands of successful APIs.',
								},
								{
									q: 'Can I migrate my existing APIs to DropAPI?',
									a: 'Yes, we offer tools and support to help you migrate your existing APIs to our platform with minimal disruption.',
								},
								{
									q: 'What kind of support do you offer?',
									a: 'We offer 24/7 technical support via chat and email. Our Pro and Enterprise plans also include priority support and dedicated account managers.',
								},
								{
									q: 'Is DropAPI compliant with data protection regulations?',
									a: 'Yes, DropAPI is compliant with GDPR, CCPA, and other major data protection regulations. We also offer features to help you maintain compliance in your API implementations.',
								},
							].map((faq, index) => (
								<motion.div
									key={faq.q}
									className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg'
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: 3.6 + index * 0.2 }}
								>
									<h4 className='text-xl font-semibold mb-2'>{faq.q}</h4>
									<p className='text-gray-600 dark:text-gray-300'>{faq.a}</p>
								</motion.div>
							))}
						</div>
					</section>

					<section className='text-center mb-16'>
						<motion.h3
							className='text-4xl font-bold mb-4 text-gray-900 dark:text-white'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 4.4 }}
						>
							Ready to Revolutionize Your API Development?
						</motion.h3>
						<motion.p
							className='text-xl text-gray-600 dark:text-gray-300 mb-8'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 4.6 }}
						>
							Join thousands of developers who are building the future with DropAPI.
						</motion.p>
						<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 4.8 }}>
							<Button
								size='lg'
								className='text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300'
							>
								Start Your Free Trial
							</Button>
						</motion.div>
					</section>
				</main>

				<footer className='bg-gray-100 dark:bg-gray-900 py-12'>
					<div className='container mx-auto px-4'>
						<div className='grid md:grid-cols-4 gap-8'>
							<div>
								<h4 className='text-lg font-semibold mb-4 text-gray-900 dark:text-white'>DropAPI</h4>
								<p className='text-gray-600 dark:text-gray-400'>Elevating API development with AI-powered solutions.</p>
							</div>
							<div>
								<h4 className='text-lg font-semibold mb-4 text-gray-900 dark:text-white'>Product</h4>
								<ul className='space-y-2'>
									<li>
										<a href='/test' className='text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'>
											Features
										</a>
									</li>
									<li>
										<a href='/test' className='text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'>
											Pricing
										</a>
									</li>
									<li>
										<a href='/test' className='text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'>
											Documentation
										</a>
									</li>
								</ul>
							</div>
							<div>
								<h4 className='text-lg font-semibold mb-4 text-gray-900 dark:text-white'>Company</h4>
								<ul className='space-y-2'>
									<li>
										<a href='/test' className='text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'>
											About Us
										</a>
									</li>
									<li>
										<a href='/test' className='text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'>
											Careers
										</a>
									</li>
									<li>
										<a href='/test' className='text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'>
											Blog
										</a>
									</li>
								</ul>
							</div>
							<div>
								<h4 className='text-lg font-semibold mb-4 text-gray-900 dark:text-white'>Connect</h4>
								<ul className='space-y-2'>
									<li>
										<a href='/test' className='text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'>
											Twitter
										</a>
									</li>
									<li>
										<a href='/test' className='text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'>
											LinkedIn
										</a>
									</li>
									<li>
										<a href='/test' className='text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'>
											GitHub
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className='mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-400'>
							<p>&copy; 2024 DropAPI. All rights reserved.</p>
						</div>
					</div>
				</footer>
			</div>
		</div>
	)
}
