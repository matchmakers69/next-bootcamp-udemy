/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		typedRoutes: true,
		serverActions: true,
	},
	images: {
		domains: ["resizer.otstatic.com", "source.unsplash.com", "https://images.otstatic.com"],
	},
};

module.exports = nextConfig;
