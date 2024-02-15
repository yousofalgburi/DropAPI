import { Button } from '@/components/ui/button'
import ApiCard from './components/ApiCards'
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

function App() {
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
						<ApiCard key={index} apiDetails={card} />
					))}
				</div>
			</main>
		</ThemeProvider>
	)
}

export default App
