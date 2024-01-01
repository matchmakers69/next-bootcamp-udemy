import { type Cuisine } from "@prisma/client";
import { prisma } from "@/lib/db";

export default async function getCuisines(): Promise<Cuisine[]> {
	try {
		const res = await prisma.cuisine.findMany();
		return res;
	} catch (error) {
		throw new Error("Cannot fetch locations");
	}
}
