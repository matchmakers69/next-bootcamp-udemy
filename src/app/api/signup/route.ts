import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(req: Request) {
	try {
		if (req.method === "POST") {
			const body = await req.json();
			const { name, email, phone, city, password } = body;

			const existingUserByEmail = await prisma.user.findUnique({
				where: { email },
			});

			if (existingUserByEmail) {
				return NextResponse.json(
					{
						user: null,
						message: "User with this email already exists",
					},
					{ status: 409 },
				);
			}
			const hashed_password = await bcrypt.hash(password, 10);
			const user = await prisma.user.create({
				data: {
					name,
					email: email.toLowerCase(),
					city,
					phone,
					password: hashed_password,
				},
			});

			return NextResponse.json({
				user: {
					name: user.name,
					email: user.email,
				},
			});
		}
		return NextResponse.json({ message: "could not create user" }, { status: 404 });
	} catch (error) {
		if (error instanceof Error) {
			return new NextResponse(
				JSON.stringify({
					status: "error",
					message: error.message,
				}),
				{ status: 500 },
			);
		} else {
			// Handle other types of errors
			return new NextResponse(
				JSON.stringify({
					status: "error",
					message: "An unknown error occurred",
				}),
				{ status: 500 },
			);
		}
	}
}
