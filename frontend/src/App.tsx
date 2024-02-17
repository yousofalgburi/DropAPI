import { Button } from '@/components/ui/button'
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'
import APICard from './components/APICard'
import Navbar from './components/Navbar'
import { ThemeProvider } from './components/theme-provider'

const exampleApis = [
	{
		name: 'Project name 1',
		description: 'API for movies.',
	},
	{
		name: 'Project name 2',
		description: 'API for games.',
	},
	{
		name: 'Project name 3',
		description: 'API for quotes.',
	},
]

export default function App() {
	const { getAccessTokenSilently } = useAuth0()

	useEffect(() => {
		async function fetchData() {
			const token = await getAccessTokenSilently()

			const response = await fetch('https://localhost:7115/api/apiapp', {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			const data = await response.json()
			console.log(data)
		}

		fetchData()
	}, [getAccessTokenSilently])

	return (
		<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
			<Navbar />

			<main className='container flex flex-col gap-6 py-12'>
				<div className='flex justify-between'>
					<h1 className='text-3xl font-bold tracking-tight'>APIs</h1>

					<Button>Add New</Button>
				</div>

				<div className='flex flex-wrap gap-4'>
					{exampleApis.map((card, index) => (
						<APICard key={index} apiDetails={card} />
					))}
				</div>
			</main>
		</ThemeProvider>
	)
}
