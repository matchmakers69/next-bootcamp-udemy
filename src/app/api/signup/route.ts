import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
	try {
		if (req.method === "POST") {
			const { firstName, lastName, email, phone, city, password } = req.body;

			return NextResponse.json({
				test: "test",
			});
		}
		return NextResponse.json({ message: "could not create blog post" }, { status: 404 });
	} catch (error) {
		return NextResponse.json({ message: "could not delete blog post" }, { status: 500 });
	}
}
