import { Auth0Provider } from '@auth0/auth0-react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './global.css'

const queryClient = new QueryClient()

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
				<App />
			</QueryClientProvider>
		</Auth0Provider>
	</React.StrictMode>
)
