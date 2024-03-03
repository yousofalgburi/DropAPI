import { buttonVariants } from '@/components/ui/button'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

interface APICardProps {
	apiDetails: {
		name: string
		description: string
		identifier: string
	}
}

export default function APICard({ apiDetails }: APICardProps) {
	return (
		<Card className='w-[350px] flex-grow'>
			<CardHeader>
				<CardTitle>{apiDetails.name}</CardTitle>
				<p className='truncate text-sm text-muted-foreground'>{apiDetails.identifier}</p>
				<CardDescription>{apiDetails.description}</CardDescription>
			</CardHeader>

			<CardFooter className='flex justify-end'>
				<a href={`/app/edit/${apiDetails.identifier}`} className={buttonVariants()}>
					View
				</a>
			</CardFooter>
		</Card>
	)
}
