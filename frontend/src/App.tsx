import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import { ThemeProvider } from './components/ThemeProvider'
import { Toaster } from './components/ui/toaster'

export default function App() {
	return (
		<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
			<Navbar />

			<main className='container flex flex-col gap-6 py-12'>
				<Outlet />
			</main>

			<Toaster />
		</ThemeProvider>
	)
}
