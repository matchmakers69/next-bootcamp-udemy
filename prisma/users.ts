import { PrismaClient, type User } from "@prisma/client";
import bcrypt from "bcrypt";
import { users } from "@/lib/placeholder-data";

export type SafeUser = Omit<User, "createdAt" | "updatedAt"> & {
	createdAt: string;
	updatedAt: string;
};

const prisma = new PrismaClient();
const saltRounds = 10;

export async function seedUsers() {
	try {
		await Promise.all(
			users.map(async (user: User) => {
				console.log(user.email);
				const hashedPassword = await bcrypt.hash(user.password, saltRounds);

				await prisma.user.upsert({
					where: { id: user.id },
					update: {},
					create: { ...user, password: hashedPassword },
				});
			}),
		);
	} catch (error) {
		console.error("Error seeding users:", error);
	}
}
