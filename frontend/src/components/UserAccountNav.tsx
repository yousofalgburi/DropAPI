'use client'

import { UserAvatar } from '@/components/UserAvatar'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useAuth0 } from '@auth0/auth0-react'

interface UserAccountNavProps extends React.HTMLAttributes<HTMLDivElement> {
	user: {
		name: string | null | undefined
		image: string | null | undefined
		email: string | null | undefined
		username: string | null | undefined
	}
}

export function UserAccountNav({ user }: UserAccountNavProps) {
	const { logout } = useAuth0()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<UserAvatar user={{ name: user.name || null, image: user.image || null }} className='h-8 w-8' />
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				<div className='flex items-center justify-start gap-2 p-2'>
					<div className='flex flex-col space-y-1 leading-none'>
						{user.name && <p className='font-medium'>{user.name}</p>}
						{user.username && (
							<p className='w-[200px] truncate text-sm text-muted-foreground'>{user.username}</p>
						)}
						{user.email && <p className='w-[200px] truncate text-sm text-muted-foreground'>{user.email}</p>}
					</div>
				</div>

				<DropdownMenuSeparator />

				<DropdownMenuItem asChild>
					<a href='/settings'>Settings</a>
				</DropdownMenuItem>

				<DropdownMenuSeparator />

				<DropdownMenuItem
					className='cursor-pointer'
					onSelect={() => logout({ logoutParams: { returnTo: window.location.origin } })}
				>
					Sign out
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
