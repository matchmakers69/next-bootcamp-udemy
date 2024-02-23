import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/options";
import { prisma } from "@/lib/db";

export async function getSession() {
	return getServerSession(authOptions);
}

export default async function getCurrentUser() {
	try {
		const session = await getSession();
		if (!session?.user?.email) {
			return null;
		}
		const currentUser = await prisma.user.findUnique({
			where: {
				email: session.user.email,
			},
		});

		if (!currentUser) {
			return null;
		}

		return {
			...currentUser,
		};
	} catch (error) {
		return null;
	}
}
