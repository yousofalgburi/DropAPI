import { useAuth0 } from '@auth0/auth0-react'
import { ModeToggle } from './components/mode-toggle'
import { ThemeProvider } from './components/theme-provider'

function App() {
	const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } = useAuth0()

	if (isLoading) {
		return <div>Loading...</div>
	}
	if (error) {
		return <div>Oops... {error.message}</div>
	}

	return (
		<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
			{isAuthenticated && user ? (
				<div>
					Hello {user.name}{' '}
					<button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
						Log out
					</button>
				</div>
			) : (
				<button onClick={() => loginWithRedirect()}>Log in</button>
			)}

			<ModeToggle />
		</ThemeProvider>
	)
}

export default App
