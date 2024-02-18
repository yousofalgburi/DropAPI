import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { useAuth0 } from '@auth0/auth0-react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import APICard from './components/APICard'
import Navbar from './components/Navbar'
import { ThemeProvider } from './components/theme-provider'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Label } from './components/ui/label'
import { APIAppValidator } from './lib/validators/apiapp'

type FormData = z.infer<typeof APIAppValidator>

export default function App() {
	const { getAccessTokenSilently } = useAuth0()
	const [apiApps, setApiApps] = useState<{ name: string; description: string }[]>([])
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(APIAppValidator),
		defaultValues: {
			name: '',
			identifier: '',
			description: '',
		},
	})

	const { mutate: addNew, isPending: isLoading } = useMutation({
		mutationFn: async ({ name, description }: { name: string; description: string }) => {
			const token = await getAccessTokenSilently()

			try {
				const response = await fetch('https://localhost:7115/api/apiapp', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${token}`,
					},
					body: JSON.stringify({ userid: '', name, identifier: '', description }),
				})

				if (!response.ok) throw new Error('Something went wrong while creating a new api app.')

				const data = await response.json()

				setApiApps((prev) => [
					...prev,
					{ name: data.name, identifier: data.identifier, description: data.description },
				])
			} catch (error) {
				console.log(error)
			}
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
					<h1 className='text-3xl font-bold tracking-tight'>API Apps ({apiApps.length})</h1>

					<Dialog>
						<DialogTrigger asChild>
							<Button>Add New</Button>
						</DialogTrigger>

						<DialogContent>
							<DialogHeader>
								<DialogTitle>Add New API App</DialogTitle>
								<DialogDescription>Enter name and description for your new api app.</DialogDescription>
							</DialogHeader>
							<form className='grid gap-4 py-4' onSubmit={handleSubmit((e) => addNew(e))}>
								<div className='flex flex-col gap-2'>
									<Label htmlFor='name'>Name</Label>
									<Input id='name' {...register('name')} className='col-span-3' />
									{errors?.name && <p className='px-1 text-xs text-red-600'>{errors.name.message}</p>}
								</div>
								<div className='flex flex-col gap-2'>
									<Label htmlFor='identifier'>Identifier</Label>
									<Label className='truncate text-sm text-muted-foreground'>
										This is the URL your API will be hit from.
									</Label>
									<Input id='identifier' {...register('identifier')} className='col-span-3' />
									{errors?.identifier && (
										<p className='px-1 text-xs text-red-600'>{errors.identifier.message}</p>
									)}
								</div>
								<div className='flex flex-col gap-2'>
									<Label htmlFor='description'>Description</Label>
									<Input id='description' {...register('description')} className='col-span-3' />
									{errors?.description && (
										<p className='px-1 text-xs text-red-600'>{errors.description.message}</p>
									)}
								</div>

								<Button
									type='submit'
									disabled={!!errors.name || !!errors.identifier || !!errors.description}
									isLoading={isLoading}
								>
									Add
								</Button>
							</form>
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
