import { ClerkLoading, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import { Loader2 } from 'lucide-react'
import { ModeToggle } from './ModeToggle'

export default function Navbar() {
	return (
		<header className='flex h-14 items-center px-4 lg:px-6'>
			<a className='flex items-center justify-center' href='/'>
				<span className='ml-2 text-2xl font-bold'>DropAPI</span>
			</a>

			<nav className='ml-auto flex items-center gap-4 sm:gap-6'>
				<a className='text-sm font-medium underline-offset-4 hover:underline' href='/home'>
					Home
				</a>

				<ModeToggle />

				<ClerkLoading>
					<Loader2 className='inline animate-spin' />
				</ClerkLoading>

				<SignedOut>
					<SignInButton />
				</SignedOut>

				<SignedIn>
					<UserButton afterSignOutUrl='/' />
				</SignedIn>
			</nav>
		</header>
	)
}
