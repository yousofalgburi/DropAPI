import { Search, Plus, Code, Key, FileText, BarChart2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const projects = [
	{ name: 'E-commerce API', description: 'RESTful API for online store operations' },
	{ name: 'Weather Service', description: 'API for retrieving weather data' },
	{ name: 'User Management', description: 'CRUD operations for user data' },
	{ name: 'Payment Gateway', description: 'Secure payment processing API' },
	{ name: 'Social Media Integration', description: 'API for social media platform connections' },
	{ name: 'Data Analytics', description: 'API for data analysis and reporting' },
]

export default function Component() {
	return (
		<div className='flex container h-screen mt-12'>
			<div className='flex-1 flex flex-col overflow-hidden'>
				<div className='flex items-center justify-between p-4 border-b'>
					<div className='flex items-center flex-1 px-4 space-x-4'>
						<Search className='h-5 w-5 text-gray-400' />
						<Input type='search' placeholder='Search projects...' className='flex-1' />
					</div>
					<Button>
						<Plus className='h-5 w-5 mr-2' />
						New Project
					</Button>
				</div>

				<main className='flex-1 overflow-x-hidden overflow-y-auto p-4'>
					<h1 className='text-2xl font-semibold mb-6'>Your API Projects</h1>
					<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
						{projects.map((project) => (
							<Card key={project.name}>
								<CardHeader>
									<CardTitle>{project.name}</CardTitle>
								</CardHeader>
								<CardContent>
									<p className='text-sm text-gray-500'>{project.description}</p>
								</CardContent>
								<CardFooter className='flex justify-between'>
									<Button variant='outline' size='sm'>
										Edit
									</Button>
								</CardFooter>
							</Card>
						))}
					</div>
				</main>
			</div>
		</div>
	)
}
