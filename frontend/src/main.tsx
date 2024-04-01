import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import AppEdit from './components/AppEdit.tsx'
import HomeFeed from './components/HomeFeed.tsx'
import './global.css'
import { SignIn } from './components/SignIn.tsx'
import { SignUp } from './components/SignUp.tsx'
import { ForgotPassword } from './components/ForgotPassword.tsx'

const queryClient = new QueryClient()

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <HomeFeed />
			},
			{
				path: '/app/edit/:id',
				element: <AppEdit />
			},
			{
				path: '/auth/signin',
				element: <SignIn />
			},
			{
				path: '/auth/signup',
				element: <SignUp />
			},
			{
				path: '/auth/forgot-password',
				element: <ForgotPassword />
			}
		]
	}
])

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
	throw new Error('Missing Publishable Key')
}

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	</React.StrictMode>
)
