import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { useAuth0 } from '@auth0/auth0-react'
import { useMutation } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import APICard from './components/APICard'
import Navbar from './components/Navbar'
import { ThemeProvider } from './components/theme-provider'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Label } from './components/ui/label'

export default function App() {
	const [apiApps, setApiApps] = useState<{ name: string; description: string }[]>([])
	const [name, setName] = useState('')
	const [description, setDescription] = useState('')
	const { getAccessTokenSilently } = useAuth0()

	const { mutate: addNew } = useMutation({
		mutationFn: async ({ name, description }: { name: string; description: string }) => {
			const token = await getAccessTokenSilently()

			await fetch('https://localhost:7115/api/apiapp', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify({ name, description, UserID: '' }),
			})
		},
	})

	useEffect(() => {
		async function fetchData() {
			const token = await getAccessTokenSilently()

			const response = await fetch('https://localhost:7115/api/apiapp', {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})

			const data = await response.json()
			setApiApps(data)
		}

		fetchData()
	}, [getAccessTokenSilently])

	return (
		<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
			<Navbar />

			<main className='container flex flex-col gap-6 py-12'>
				<div className='flex justify-between'>
					<h1 className='text-3xl font-bold tracking-tight'>API Apps</h1>

					<Dialog>
						<DialogTrigger>
							<Button>Add New</Button>
						</DialogTrigger>

						<DialogContent>
							<DialogHeader>
								<DialogTitle>Add New API App</DialogTitle>
								<DialogDescription>Enter name and description for your new api app.</DialogDescription>
							</DialogHeader>
							<div className='grid gap-4 py-4'>
								<div className='grid grid-cols-4 items-center gap-4'>
									<Label htmlFor='name' className='text-right'>
										Name
									</Label>
									<Input
										id='name'
										value={name}
										onChange={(e) => setName(e.target.value)}
										className='col-span-3'
									/>
								</div>
								<div className='grid grid-cols-4 items-center gap-4'>
									<Label htmlFor='description' className='text-right'>
										Description
									</Label>
									<Input
										id='description'
										value={description}
										onChange={(e) => setDescription(e.target.value)}
										className='col-span-3'
									/>
								</div>
							</div>
							<DialogFooter>
								<Button
									type='submit'
									onClick={() => addNew({ name, description })}
									disabled={!name || !description}
								>
									Add
								</Button>
							</DialogFooter>
						</DialogContent>
					</Dialog>
				</div>

				<div className='flex flex-wrap gap-4'>
					{apiApps.map((card, index) => (
						<APICard key={index} apiDetails={card} />
					))}
				</div>
			</main>
		</ThemeProvider>
	)
}
