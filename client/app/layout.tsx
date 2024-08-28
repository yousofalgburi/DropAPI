import type { Metadata } from 'next'

import { Bricolage_Grotesque } from 'next/font/google'
import { Space_Mono } from 'next/font/google'
import { cn } from '@/lib/utils'

import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Toaster } from 'sonner'

export const metadata: Metadata = {
	title: 'DropAPI',
	description: 'AI-powered API creation platform.',
}

const fontHeading = Bricolage_Grotesque({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-heading',
})

const fontBody = Space_Mono({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-body',
	weight: '400',
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={cn('antialiased', fontHeading.variable, fontBody.variable)}>
				<ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
					<div className='flex flex-col min-h-[100dvh]'>
						<Navbar />
						{children}
						<Footer />
					</div>
				</ThemeProvider>
			</body>

			<Toaster richColors />
		</html>
	)
}
