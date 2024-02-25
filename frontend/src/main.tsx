import { Auth0Provider } from '@auth0/auth0-react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import AppEdit from './components/AppEdit.tsx'
import { AuthProvider } from './components/AuthProvider.tsx'
import HomeFeed from './components/HomeFeed.tsx'
import './global.css'

const queryClient = new QueryClient()

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <HomeFeed />,
			},
			{
				path: '/app/edit/:id',
				element: <AppEdit />,
			},
		],
	},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Auth0Provider
			domain={`${import.meta.env.VITE_AUTH0_DOMAIN}`}
			clientId={`${import.meta.env.VITE_AUTH0_CLIENT_ID}`}
			authorizationParams={{
				redirect_uri: window.location.origin,
				audience: 'https://localhost:7115/',
				scope: 'openid profile email read:apiapp write:apiapp',
			}}
		>
			<QueryClientProvider client={queryClient}>
				<AuthProvider>
					<RouterProvider router={router} />
				</AuthProvider>
			</QueryClientProvider>
		</Auth0Provider>
	</React.StrictMode>
)
