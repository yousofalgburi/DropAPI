'use client'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { UserAvatar } from '@/components/UserAvatar'
import { logOut } from '@/app/auth/auth.action'
import type { User } from '@/types/user'
import { useState } from 'react'

interface UserAccountNavProps extends React.HTMLAttributes<HTMLDivElement> {
	user: User
}

export function UserAccountNav({ user }: UserAccountNavProps) {
	const [isLoading, setIsLoading] = useState(false)

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<UserAvatar user={{ name: user.name || null, image: user.image || null }} className='h-8 w-8' />
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				<div className='flex items-center justify-start gap-2 p-2'>
					<div className='flex flex-col space-y-1 leading-none'>
						{user.name && <p className='font-medium'>{user.name}</p>}
						{user.email && <p className='w-[200px] truncate text-sm text-muted-foreground'>{user.email}</p>}
					</div>
				</div>
				<DropdownMenuSeparator />
				<DropdownMenuItem
					className='cursor-pointer'
					disabled={isLoading}
					onSelect={(event) => {
						event.preventDefault()
						setIsLoading(true)
						logOut()
						setIsLoading(false)
					}}
				>
					{isLoading ? 'Signing out...' : 'Sign out'}
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
