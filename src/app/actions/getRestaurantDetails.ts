import { type RestaurantDetailsSubset } from "@/api/services/interfaces";
import { prisma } from "@/lib/db";

export default async function getRestaurantDetails(slug: string): Promise<RestaurantDetailsSubset> {
	try {
		const res = await prisma.restaurant.findFirst({
			where: { slug },
			select: {
				id: true,
				name: true,
				images: true,
				description: true,
				slug: true,
			},
		});
		if (!res) {
			throw new Error();
		}
		return res;
	} catch (error) {
		throw new Error("Cannot fetch restaurant details by slug");
	}
}
