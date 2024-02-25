import { User, useAuth0 } from '@auth0/auth0-react'
import { createContext } from 'react'

type AuthProviderState = {
	isAuthenticated: boolean
	isLoading: boolean
	user: User | undefined
	loginWithRedirect: () => void
	getAccessTokenSilently: () => void
}

const initialState: AuthProviderState = {
	isAuthenticated: false,
	isLoading: false,
	user: undefined,
	loginWithRedirect: () => {},
	getAccessTokenSilently: () => {},
}

export const AuthProviderContext = createContext<AuthProviderState>(initialState)

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const { isAuthenticated, isLoading, user, loginWithRedirect, getAccessTokenSilently } = useAuth0()

	return (
		<AuthProviderContext.Provider
			value={{ isAuthenticated, isLoading, user, loginWithRedirect, getAccessTokenSilently }}
		>
			{children}
		</AuthProviderContext.Provider>
	)
}
