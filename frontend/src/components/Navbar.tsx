import { useAuth0 } from '@auth0/auth0-react'
import { Loader2 } from 'lucide-react'
import { ModeToggle } from './ModeToggle'
import { UserAccountNav } from './UserAccountNav'

export default function Navbar() {
	const { isAuthenticated, isLoading, user, loginWithRedirect } = useAuth0()

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

				{isLoading ? (
					<Loader2 className='inline animate-spin' />
				) : isAuthenticated && user ? (
					<UserAccountNav
						user={{
							name: user.name,
							image: user.image,
							email: user.email,
							username: user.username,
						}}
					/>
				) : (
					<button onClick={() => loginWithRedirect()}>Log in</button>
				)}
			</nav>
		</header>
	)
}
