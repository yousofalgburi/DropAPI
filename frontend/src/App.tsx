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
import { useMutation, useQuery } from '@tanstack/react-query'
import { Loader2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import APICard from './components/APICard'
import Navbar from './components/Navbar'
import { ThemeProvider } from './components/theme-provider'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Label } from './components/ui/label'
import { Textarea } from './components/ui/textarea'
import { Toaster } from './components/ui/toaster'
import { useToast } from './components/ui/use-toast'
import { api } from './lib/constants'
import { APIAppValidator } from './lib/validators/apiapp'

type APIApp = z.infer<typeof APIAppValidator>

export default function App() {
	const { isLoading, isAuthenticated, getAccessTokenSilently } = useAuth0()

	const { toast } = useToast()
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<APIApp>({
		resolver: zodResolver(APIAppValidator),
		defaultValues: {
			name: '',
			identifier: '',
			description: '',
		},
	})

	async function fetchInitialData() {
		if (!isAuthenticated) {
			return []
		}

		const token = await getAccessTokenSilently()

		const response = await fetch(`${api}/api/apiapp`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})

		const data = (await response.json()) as APIApp[]

		return data
	}

	const { data: apiApps } = useQuery({ queryKey: ['apiData'], queryFn: fetchInitialData, enabled: isAuthenticated })

	const { mutate: addNew, isPending: isLoadingNew } = useMutation({
		mutationFn: async ({
			name,
			description,
			identifier,
		}: {
			name: string
			description: string
			identifier: string
		}) => {
			const token = await getAccessTokenSilently()

			const response = await fetch(`${api}/api/apiapp`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify({ userid: '', name, identifier, description }),
			})

			if (!response.ok) {
				const message = await response.text()
				throw new Error(message)
			}

			const data = await response.json()

			apiApps && apiApps.push({ name: data.name, identifier: data.identifier, description: data.description })
		},
		onError: (error) => {
			return toast({
				title: 'Error',
				description: error.message,
				variant: 'destructive',
			})
		},
	})

	return (
		<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
			<Navbar />

			<main className='container flex flex-col gap-6 py-12'>
				<div className='flex justify-between'>
					<h1 className='text-3xl font-bold tracking-tight'>
						API Apps ({isLoading ? <Loader2 className='inline animate-spin' /> : apiApps && apiApps.length})
					</h1>

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
									<Textarea
										id='description'
										{...register('description')}
										className='col-span-3 max-h-32'
									/>
									{errors?.description && (
										<p className='px-1 text-xs text-red-600'>{errors.description.message}</p>
									)}
								</div>

								<Button
									type='submit'
									disabled={!!errors.name || !!errors.identifier || !!errors.description}
									isLoading={isLoadingNew}
								>
									Add
								</Button>
							</form>
						</DialogContent>
					</Dialog>
				</div>

				<div className='flex flex-wrap gap-4'>
					{isLoading ? (
						<div className='w-full py-10 flex justify-center'>
							<Loader2 className='animate-spin' />
						</div>
					) : (
						apiApps && apiApps.map((card, index) => <APICard key={index} apiDetails={card} />)
					)}
				</div>
			</main>

			<Toaster />
		</ThemeProvider>
	)
}
