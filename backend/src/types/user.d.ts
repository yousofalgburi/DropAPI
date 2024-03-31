export interface UserSignInRequest {
	email: string
	password: string
}

export interface UserSignUpRequest {
	name: string
	email: string
	password: string
	confirmPassword: string
}
