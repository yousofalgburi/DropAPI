import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function ApiCard({ apiDetails }: { apiDetails: { name: string; description: string } }) {
	return (
		<Card className='w-[350px] flex-grow'>
			<CardHeader>
				<CardTitle>{apiDetails.name}</CardTitle>
				<CardDescription>{apiDetails.description}</CardDescription>
			</CardHeader>

			<CardFooter className='flex justify-end'>
				<Button>View</Button>
			</CardFooter>
		</Card>
	)
}
