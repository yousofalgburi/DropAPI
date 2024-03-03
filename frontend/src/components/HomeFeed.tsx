import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/components/ui/dialog'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQuery } from '@tanstack/react-query'
import { Loader2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import APICard from '../components/APICard'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Textarea } from '../components/ui/textarea'
import { useToast } from '../components/ui/use-toast'
import { api } from '../lib/constants'

import { ClerkLoaded, ClerkLoading, useAuth } from '@clerk/clerk-react'
import { APIAppValidator } from '../lib/validators/apiapp'

type APIApp = z.infer<typeof APIAppValidator>

export default function HomeFeed() {
	const { getToken, isSignedIn, isLoaded } = useAuth()

	const { toast } = useToast()
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm<APIApp>({
		resolver: zodResolver(APIAppValidator),
		defaultValues: {
			name: '',
			identifier: '',
			description: ''
		}
	})

	async function fetchInitialData() {
		if (!isSignedIn) return []

		const response = await fetch(`${api}/api/apiapp`, {
			headers: {
				Authorization: `Bearer ${await getToken()}`
			}
		})

		const data = (await response.json()) as APIApp[]

		return data
	}

	const { data: apiApps } = useQuery({
		queryKey: ['apiData'],
		queryFn: fetchInitialData,
		enabled: isLoaded,
		initialData: []
	})

	const { mutate: addNew, isPending: isLoadingNew } = useMutation({
		mutationFn: async ({
			name,
			description,
			identifier
		}: {
			name: string
			description: string
			identifier: string
		}) => {
			const response = await fetch(`${api}/api/apiapp`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${await getToken()}`
				},
				body: JSON.stringify({ userid: '', name, identifier, description })
			})

			if (!response.ok) {
				const message = await response.text()
				throw new Error(message)
			}

			const data = await response.json()

			apiApps.push({ name: data.name, identifier: data.identifier, description: data.description })
		},
		onError: (error) => {
			return toast({
				title: 'Error',
				description: error.message,
				variant: 'destructive'
			})
		}
	})

	return (
		<>
			<div className='flex justify-between'>
				<h1 className='text-3xl font-bold tracking-tight'>
					API Apps (
					{
						<ClerkLoading>
							<Loader2 className='inline animate-spin' />
						</ClerkLoading>
					}
					<ClerkLoaded>{apiApps.length}</ClerkLoaded>)
				</h1>

				<Dialog>
					<DialogTrigger asChild>
						<Button disabled={!isLoaded}>Add New</Button>
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
								{errors?.identifier && <p className='px-1 text-xs text-red-600'>{errors.identifier.message}</p>}
							</div>
							<div className='flex flex-col gap-2'>
								<Label htmlFor='description'>Description</Label>
								<Textarea id='description' {...register('description')} className='col-span-3 max-h-32' />
								{errors?.description && <p className='px-1 text-xs text-red-600'>{errors.description.message}</p>}
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
				<ClerkLoading>
					<div className='w-full py-10 flex justify-center'>
						<Loader2 className='animate-spin' />
					</div>
				</ClerkLoading>

				<ClerkLoaded>
					{apiApps.map((card, index) => (
						<APICard key={index} apiDetails={card} />
					))}
				</ClerkLoaded>
			</div>
		</>
	)
}
