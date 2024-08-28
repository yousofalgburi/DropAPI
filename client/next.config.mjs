/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'standalone',
	webpack: (config, { isServer }) => {
		if (isServer) {
			config.externals = [...config.externals, '@node-rs/argon2', '@node-rs/bcrypt']
		}
		return config
	},
	images: {
		remotePatterns: [{ hostname: 'images.unsplash.com' }],
	},
}

export default nextConfig
