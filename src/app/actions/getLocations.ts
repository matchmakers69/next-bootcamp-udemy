import { type Location } from "@prisma/client";
import { prisma } from "@/lib/db";

export default async function getLocations(): Promise<Location[]> {
	try {
		const res = await prisma.location.findMany();
		return res;
	} catch (error) {
		throw new Error("Cannot fetch locations");
	}
}
