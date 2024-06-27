import { Button } from '../components/ui/button'
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar'

export default function LandingPage() {
	return (
		<div className='flex flex-col min-h-[100dvh]'>
			<header className='px-4 lg:px-6 h-14 flex items-center'>
				<a href='/' className='flex items-center justify-center'>
					<MountainIcon className='h-6 w-6' />
					<span className='sr-only'>DropAPI</span>
				</a>
				<nav className='ml-auto flex gap-4 sm:gap-6'>
					<a href='/' className='text-sm font-medium hover:underline underline-offset-4'>
						Features
					</a>
					<a href='/' className='text-sm font-medium hover:underline underline-offset-4'>
						Pricing
					</a>
					<a href='/' className='text-sm font-medium hover:underline underline-offset-4'>
						Customers
					</a>
					<a href='/' className='text-sm font-medium hover:underline underline-offset-4'>
						Contact
					</a>
				</nav>
			</header>
			<main className='flex-1'>
				<section className='w-full py-12 md:py-24 lg:py-32 xl:py-48'>
					<div className='container px-4 md:px-6'>
						<div className='grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]'>
							<div className='flex flex-col justify-center space-y-4'>
								<div className='space-y-2'>
									<h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>Build Custom APIs with Ease</h1>
									<p className='max-w-[600px] text-muted-foreground md:text-xl'>
										DropAPI is an AI-powered platform that allows you to build and deploy custom APIs in minutes, without any
										coding. Leverage natural language and generative AI to rapidly create APIs, and take advantage of built-in
										features like database, caching, rate limiting, and security.
									</p>
								</div>
								<div className='flex flex-col gap-2 min-[400px]:flex-row'>
									<a
										href='/'
										className='inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
									>
										Get Started
									</a>
									<a
										href='/'
										className='inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
									>
										Learn More
									</a>
								</div>
							</div>
							<img
								src='/placeholder.svg'
								width='550'
								height='310'
								alt='Hero'
								className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last'
							/>
						</div>
					</div>
				</section>
				<section id='features' className='w-full py-12 md:py-24 lg:py-32 bg-muted'>
					<div className='container px-4 md:px-6'>
						<div className='flex flex-col items-center justify-center space-y-4 text-center'>
							<div className='space-y-2'>
								<div className='inline-block rounded-lg bg-muted px-3 py-1 text-sm'>Key Features</div>
								<h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>Powerful Features to Build Custom APIs</h2>
								<p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
									DropAPI provides a comprehensive set of features to help you build, deploy, and manage your custom APIs with ease.
								</p>
							</div>
						</div>
						<div className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12'>
							<div className='flex flex-col justify-center space-y-4'>
								<ul className='grid gap-6'>
									<li>
										<div className='grid gap-1'>
											<h3 className='text-xl font-bold'>Natural Language API Creation</h3>
											<p className='text-muted-foreground'>
												Leverage the power of generative AI to create APIs using natural language, without writing a single
												line of code.
											</p>
										</div>
									</li>
									<li>
										<div className='grid gap-1'>
											<h3 className='text-xl font-bold'>Integrated Database</h3>
											<p className='text-muted-foreground'>
												DropAPI includes a built-in database to store and manage your API data, eliminating the need for a
												separate database service.
											</p>
										</div>
									</li>
									<li>
										<div className='grid gap-1'>
											<h3 className='text-xl font-bold'>Caching and Rate Limiting</h3>
											<p className='text-muted-foreground'>
												Automatically cache API responses and implement rate limiting to improve performance and protect your
												APIs from abuse.
											</p>
										</div>
									</li>
									<li>
										<div className='grid gap-1'>
											<h3 className='text-xl font-bold'>Secure by Default</h3>
											<p className='text-muted-foreground'>
												DropAPI includes built-in security features like authentication, authorization, and SSL/TLS encryption
												to keep your APIs and data safe.
											</p>
										</div>
									</li>
								</ul>
							</div>
							<img
								src='/placeholder.svg'
								width='550'
								height='310'
								alt='Features'
								className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last'
							/>
						</div>
					</div>
				</section>
				<section id='pricing' className='w-full py-12 md:py-24 lg:py-32 bg-muted'>
					<div className='container px-4 md:px-6'>
						<div className='flex flex-col items-center justify-center space-y-4 text-center'>
							<div className='space-y-2'>
								<div className='inline-block rounded-lg bg-muted px-3 py-1 text-sm'>Pricing</div>
								<h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>Simple and Transparent Pricing</h2>
								<p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
									DropAPI offers a flexible pricing model to fit your needs, whether you're a solo developer or a large enterprise.
								</p>
							</div>
						</div>
						<div className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12'>
							<div className='rounded-lg border bg-background p-6 space-y-4'>
								<div className='space-y-1'>
									<h3 className='text-2xl font-bold'>Starter</h3>
									<p className='text-muted-foreground'>Perfect for individuals and small teams</p>
								</div>
								<div className='space-y-1'>
									<div className='text-4xl font-bold'>$9</div>
									<p className='text-muted-foreground'>per month</p>
								</div>
								<ul className='space-y-2 text-muted-foreground'>
									<li>
										<CheckIcon className='mr-2 inline-block h-4 w-4' />1 API
									</li>
									<li>
										<CheckIcon className='mr-2 inline-block h-4 w-4' />
										100,000 API calls per month
									</li>
									<li>
										<CheckIcon className='mr-2 inline-block h-4 w-4' />
										Basic support
									</li>
								</ul>
								<Button className='w-full'>Get Started</Button>
							</div>
							<div className='rounded-lg border bg-background p-6 space-y-4'>
								<div className='space-y-1'>
									<h3 className='text-2xl font-bold'>Pro</h3>
									<p className='text-muted-foreground'>For growing businesses and teams</p>
								</div>
								<div className='space-y-1'>
									<div className='text-4xl font-bold'>$49</div>
									<p className='text-muted-foreground'>per month</p>
								</div>
								<ul className='space-y-2 text-muted-foreground'>
									<li>
										<CheckIcon className='mr-2 inline-block h-4 w-4' />5 APIs
									</li>
									<li>
										<CheckIcon className='mr-2 inline-block h-4 w-4' />
										1,000,000 API calls per month
									</li>
									<li>
										<CheckIcon className='mr-2 inline-block h-4 w-4' />
										Priority support
									</li>
								</ul>
								<Button className='w-full'>Get Started</Button>
							</div>
							<div className='rounded-lg border bg-background p-6 space-y-4'>
								<div className='space-y-1'>
									<h3 className='text-2xl font-bold'>Enterprise</h3>
									<p className='text-muted-foreground'>For large organizations and custom needs</p>
								</div>
								<div className='space-y-1'>
									<div className='text-4xl font-bold'>Contact Us</div>
									<p className='text-muted-foreground'>Customized pricing</p>
								</div>
								<ul className='space-y-2 text-muted-foreground'>
									<li>
										<CheckIcon className='mr-2 inline-block h-4 w-4' />
										Unlimited APIs
									</li>
									<li>
										<CheckIcon className='mr-2 inline-block h-4 w-4' />
										Unlimited API calls
									</li>
									<li>
										<CheckIcon className='mr-2 inline-block h-4 w-4' />
										Dedicated support
									</li>
								</ul>
								<Button className='w-full'>Contact Sales</Button>
							</div>
						</div>
					</div>
				</section>
				<section id='customers' className='w-full py-12 md:py-24 lg:py-32'>
					<div className='container px-4 md:px-6'>
						<div className='flex flex-col items-center justify-center space-y-4 text-center'>
							<div className='space-y-2'>
								<div className='inline-block rounded-lg bg-muted px-3 py-1 text-sm'>Customers</div>
								<h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>What Our Customers Say</h2>
								<p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
									Hear from the developers and teams who have used DropAPI to build and deploy their custom APIs.
								</p>
							</div>
						</div>
						<div className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12'>
							<div className='rounded-lg border bg-background p-6 space-y-4'>
								<div className='flex items-start gap-4'>
									<Avatar>
										<AvatarImage src='/placeholder-user.jpg' />
										<AvatarFallback>JD</AvatarFallback>
									</Avatar>
									<div className='grid gap-1 items-start'>
										<div className='flex items-center gap-2'>
											<div className='font-bold'>John Doe</div>
											<div className='text-sm text-muted-foreground'>CTO, Acme Inc.</div>
										</div>
										<p className='text-muted-foreground'>
											"DropAPI has been a game-changer for our team. We were able to build and deploy a custom API in just a few
											hours, without any coding. The built-in features like caching and rate limiting have been a huge
											time-saver."
										</p>
									</div>
								</div>
							</div>
							<div className='rounded-lg border bg-background p-6 space-y-4'>
								<div className='flex items-start gap-4'>
									<Avatar>
										<AvatarImage src='/placeholder-user.jpg' />
										<AvatarFallback>SM</AvatarFallback>
									</Avatar>
									<div className='grid gap-1 items-start'>
										<div className='flex items-center gap-2'>
											<div className='font-bold'>Sarah Miller</div>
											<div className='text-sm text-muted-foreground'>Developer, Startup X</div>
										</div>
										<p className='text-muted-foreground'>
											"As a solo developer, DropAPI has been a lifesaver. I was able to create a custom API for my app in no
											time, and the security features give me peace of mind. The pricing is also very reasonable for my needs."
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section id='contact' className='w-full py-12 md:py-24 lg:py-32 bg-muted'>
					<div className='container px-4 md:px-6'>
						<div className='flex flex-col items-center justify-center space-y-4 text-center'>
							<div className='space-y-2'>
								<div className='inline-block rounded-lg bg-muted px-3 py-1 text-sm'>Contact</div>
								<h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>Get in Touch</h2>
								<p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed' />
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	)
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<title>Check Icon</title>
			<path d='M20 6 9 17l-5-5' />
		</svg>
	)
}

function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<title>Mountain Icon</title>
			<path d='m8 3 4 8 5-5 5 15H2L8 3z' />
		</svg>
	)
}
