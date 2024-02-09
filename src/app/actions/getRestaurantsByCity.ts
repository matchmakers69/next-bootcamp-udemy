import { type PRICE } from "@prisma/client";
import { prisma } from "@/lib/db";
import { type SearchParams } from "@/api/services/interfaces/defs";

interface WhereClause {
	location?: {
		name: {
			equals: string;
		};
	};
	cuisine?: {
		name: {
			equals: string;
		};
	};
	price?: {
		equals: PRICE;
	};
}

export default async function getRestaurantsByCity(searchParams: SearchParams) {
	try {
		const where: WhereClause = {};
		if (searchParams.city) {
			const location = {
				name: {
					equals: searchParams.city.toLowerCase(),
				},
			};

			where.location = location;
		}
		if (searchParams.cuisine) {
			const cuisine = {
				name: {
					equals: searchParams.cuisine.toLowerCase(),
				},
			};

			where.cuisine = cuisine;
		}

		if (searchParams.price) {
			const price = {
				equals: searchParams.price,
			};

			where.price = price;
		}
		const select = {
			id: true,
			name: true,
			main_image: true,
			price: true,
			cuisine: true,
			location: true,
			slug: true,
			reviews: true,
		};

		return await prisma.restaurant.findMany({
			where,
			select,
		});
	} catch (error) {
		throw new Error("Cannot fetch menu items by slug");
	}
}
