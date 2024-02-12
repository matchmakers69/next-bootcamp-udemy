/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		typedRoutes: true,
		serverActions: true,
		serverComponentsExternalPackages: ["@prisma/client", "bcrypt"],
	},
	images: {
		domains: ["resizer.otstatic.com", "source.unsplash.com", "images.otstatic.com"],
	},
};

module.exports = nextConfig;
