import { prisma } from "@/lib/db";

export default async function getSearchResults(city: string | undefined) {
	try {
		const select = {
			id: true,
			name: true,
			main_image: true,
			price: true,
			cuisine: true,
			location: true,
			slug: true,
		};
		// We need to check if city parameter was given, if not we want to return all restaurants
		if (!city) return await prisma.restaurant.findMany({ select });
		return await prisma.restaurant.findMany({
			where: {
				location: {
					name: {
						equals: city.toLowerCase(),
					},
				},
			},
			select,
		});
	} catch (error) {
		throw new Error("Cannot fetch menu items by slug");
	}
}
