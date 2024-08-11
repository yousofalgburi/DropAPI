import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

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
			<title>DropAPI</title>
			<path d='m8 3 4 8 5-5 5 15H2L8 3z' />
		</svg>
	)
}

export default function Home() {
	return (
		<div className='flex flex-col min-h-[100dvh]'>
			<header className='bg-background px-4 lg:px-6 h-14 flex items-center'>
				<Link href='#' className='flex items-center justify-center' prefetch={false}>
					<MountainIcon className='h-6 w-6' />
					<span className='sr-only'>DropAPI</span>
				</Link>
				<nav className='ml-auto flex gap-4 sm:gap-6 items-center'>
					<Link href='#' className='text-sm font-medium hover:underline underline-offset-4' prefetch={false}>
						Features
					</Link>
					<Link href='#' className='text-sm font-medium hover:underline underline-offset-4' prefetch={false}>
						Pricing
					</Link>
					<Link href='#' className='text-sm font-medium hover:underline underline-offset-4' prefetch={false}>
						Documentation
					</Link>
					<Link href='#' className='text-sm font-medium hover:underline underline-offset-4' prefetch={false}>
						Contact
					</Link>
					<Button variant='outline' className='px-3 py-1 rounded-md text-sm font-medium'>
						Sign In
					</Button>
				</nav>
			</header>
			<main className='flex-1'>
				<section className='w-full py-12 md:py-24 lg:py-32 xl:py-48'>
					<div className='container px-4 md:px-6'>
						<div className='grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
							<div className='flex flex-col justify-center space-y-4'>
								<div className='space-y-2'>
									<div className='inline-block rounded-lg bg-muted px-3 py-1 text-sm'>AI-Powered API Platform</div>
									<h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
										Build and Deploy APIs Faster with DropAPI
									</h1>
									<p className='max-w-[600px] text-muted-foreground md:text-xl'>
										DropAPI is an AI-powered platform that allows you to build, deploy, and scale custom APIs with ease. Leverage
										natural language and generative AI to rapidly create APIs, and take advantage of built-in features like
										database, caching, rate limiting, and security.
									</p>
								</div>
								<div className='flex flex-col gap-2 min-[400px]:flex-row'>
									<Link
										href='#'
										className='inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
										prefetch={false}
									>
										Get Started
									</Link>
									<Link
										href='#'
										className='inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
										prefetch={false}
									>
										Learn More
									</Link>
								</div>
							</div>
							<img
								src='https://generated.vusercontent.net/placeholder.svg'
								width='600'
								height='600'
								alt='Hero'
								className='mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square'
							/>
						</div>
					</div>
				</section>
				<section className='w-full py-12 md:py-24 lg:py-32 bg-muted'>
					<div className='container px-4 md:px-6'>
						<div className='flex flex-col items-center justify-center space-y-4 text-center'>
							<div className='space-y-2'>
								<div className='inline-block rounded-lg bg-muted px-3 py-1 text-sm'>Key Features</div>
								<h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>Powerful Features to Build and Deploy APIs Faster</h2>
								<p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
									DropAPI provides a comprehensive set of features to help you build, deploy, and scale your APIs with ease. From
									AI-powered API creation to global edge deployment, DropAPI has you covered.
								</p>
							</div>
						</div>
						<div className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12'>
							<div className='flex flex-col justify-center space-y-4'>
								<ul className='grid gap-6'>
									<li>
										<div className='grid gap-1'>
											<h3 className='text-xl font-bold'>AI-Powered API Creation</h3>
											<p className='text-muted-foreground'>
												Leverage natural language and generative AI to rapidly create APIs without writing a single line of
												code.
											</p>
										</div>
									</li>
									<li>
										<div className='grid gap-1'>
											<h3 className='text-xl font-bold'>Integrated Database</h3>
											<p className='text-muted-foreground'>
												DropAPI provides a built-in database to store and manage your API data, eliminating the need for
												external database setup.
											</p>
										</div>
									</li>
									<li>
										<div className='grid gap-1'>
											<h3 className='text-xl font-bold'>Caching and Rate Limiting</h3>
											<p className='text-muted-foreground'>
												Improve the performance and reliability of your APIs with built-in caching and rate limiting features.
											</p>
										</div>
									</li>
									<li>
										<div className='grid gap-1'>
											<h3 className='text-xl font-bold'>Secure and Scalable</h3>
											<p className='text-muted-foreground'>
												DropAPI ensures the security and scalability of your APIs, allowing you to focus on building great
												products.
											</p>
										</div>
									</li>
								</ul>
							</div>
							<img
								src='https://generated.vusercontent.net/placeholder.svg'
								width='550'
								height='310'
								alt='placeholder'
								className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last'
							/>
						</div>
					</div>
				</section>
				<section className='w-full py-12 md:py-24 lg:py-32'>
					<div className='container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10'>
						<div className='space-y-2'>
							<h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>Deploy Your APIs to the Global Edge</h2>
							<p className='max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
								DropAPI's global edge network ensures your APIs are lightning-fast and highly available, no matter where your users
								are located.
							</p>
						</div>
						<div className='flex flex-col gap-2 min-[400px]:flex-row lg:justify-end'>
							<Link
								href='#'
								className='inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
								prefetch={false}
							>
								Get Started
							</Link>
							<Link
								href='#'
								className='inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
								prefetch={false}
							>
								Learn More
							</Link>
						</div>
					</div>
				</section>
				<section className='w-full py-12 md:py-24 lg:py-32 border-t'>
					<div className='container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10'>
						<div className='space-y-3'>
							<h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>Get Started with DropAPI</h2>
							<p className='mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
								Sign up for a free account and start building and deploying your APIs today.
							</p>
						</div>
						<div className='mx-auto w-full max-w-sm space-y-2'>
							<form className='flex gap-2'>
								<Input type='email' placeholder='Enter your email' className='max-w-lg flex-1' />
								<Button type='submit'>Sign Up</Button>
							</form>
							<p className='text-xs text-muted-foreground'>
								By signing up, you agree to our{' '}
								<Link href='#' className='underline underline-offset-2' prefetch={false}>
									Terms &amp; Conditions
								</Link>
							</p>
						</div>
					</div>
				</section>
			</main>
			<footer className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t'>
				<p className='text-xs text-muted-foreground'>&copy; 2024 DropAPI. All rights reserved.</p>
				<nav className='sm:ml-auto flex gap-4 sm:gap-6'>
					<Link href='#' className='text-xs hover:underline underline-offset-4' prefetch={false}>
						Terms of Service
					</Link>
					<Link href='#' className='text-xs hover:underline underline-offset-4' prefetch={false}>
						Privacy
					</Link>
				</nav>
			</footer>
		</div>
	)
}
