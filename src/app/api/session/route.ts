/* eslint-disable @typescript-eslint/no-unused-vars */
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";

export async function GET(request: Request) {
	const session = await getServerSession(authOptions);

	if (!session) {
		return new NextResponse(
			JSON.stringify({
				status: "fail",
				message: "You are not authenticated",
			}),
			{ status: 401 },
		);
	}
	console.log("GET API", session);
	return NextResponse.json({
		authenticated: !!session,
	});
}
