import { prisma } from "@/lib/db";
import { type MenuItem } from "@/api/services/interfaces";

export default async function getMenuItems(slug: string): Promise<MenuItem[]> {
	try {
		const res = await prisma.restaurant.findFirst({
			where: { slug },
			select: {
				items: true,
			},
		});
		if (!res) {
			throw new Error();
		}
		return res.items;
	} catch (error) {
		throw new Error("Cannot fetch menu items by slug");
	}
}
