import Link from 'next/link'
import { ModeToggle } from '@/components/ModeToggle'
import { getUser } from '@/lib/lucia'
import { UserAccountNav } from './UserAccountNav'
import { Menu } from 'lucide-react'
import { MountainIcon } from '@/components/Icons/MountainIcon'
import { buttonVariants } from './ui/button'

export async function Navbar() {
	const user = await getUser()

	return (
		<header className='sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
			<div className='container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0'>
				<div className='flex gap-6 md:gap-10'>
					<Link href='/' className='flex items-center space-x-2' prefetch={false}>
						<MountainIcon className='h-6 w-6' />
						<span className='inline-block font-bold'>DropAPI</span>
					</Link>
				</div>
				<div className='flex flex-1 items-center justify-end space-x-4'>
					<nav className='flex items-center space-x-4'>
						<ModeToggle />
						{user ? (
							<UserAccountNav user={user} />
						) : (
							<Link className={buttonVariants({ size: 'sm' })} href='/auth'>
								Sign In
							</Link>
						)}
					</nav>
				</div>
				<div className='md:hidden'>
					<button className='text-muted-foreground hover:text-primary' type='button'>
						<Menu className='h-6 w-6' />
						<span className='sr-only'>Open main menu</span>
					</button>
				</div>
			</div>
		</header>
	)
}
