import { Auth0Provider } from '@auth0/auth0-react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Auth0Provider
			domain={`${import.meta.env.VITE_AUTH0_DOMAIN}`}
			clientId={`${import.meta.env.VITE_AUTH0_CLIENT_ID}`}
			authorizationParams={{
				redirect_uri: window.location.origin,
				audience: 'https://localhost:7115/',
				scope: 'read:apiapp',
			}}
		>
			<App />
		</Auth0Provider>
	</React.StrictMode>
)
