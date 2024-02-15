import { Icons } from '@/components/Icons'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { AvatarProps } from '@radix-ui/react-avatar'

interface UserAvatarProps extends AvatarProps {
	user: {
		image: string | null
		name: string | null
	}
}

export function UserAvatar({ user, ...props }: UserAvatarProps) {
	return (
		<Avatar {...props}>
			{user.image ? (
				<div className='relative aspect-square h-full w-full'>
					<img
						src={user.image}
						sizes='(max-width: 320px) 280px, (max-width: 480px) 440px, 800px'
						alt='profile picture'
						referrerPolicy='no-referrer'
					/>
				</div>
			) : (
				<AvatarFallback>
					<span className='sr-only'>{user?.name}</span>
					<Icons.user className='h-4 w-4' />
				</AvatarFallback>
			)}
		</Avatar>
	)
}
