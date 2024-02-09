import { type RestaurantSubset } from "@/api/services/interfaces/defs";
import { prisma } from "@/lib/db";

export default async function getRestaurants(): Promise<RestaurantSubset[]> {
	try {
		const res = await prisma.restaurant.findMany({
			select: {
				id: true,
				name: true,
				main_image: true,
				cuisine: true,
				slug: true,
				location: true,
				price: true,
				reviews: true,
			},
		});
		return res;
	} catch (error) {
		throw new Error("Cannot fetch restaurants");
	}
}
