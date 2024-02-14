import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";

export default async function ProfilePage() {
	// Getting session information on server
	const session = await getServerSession(authOptions);
	const user = session?.user;
	// Because middleware is created no extra need to check is required
	return (
		<section className="container mx-auto text-center">
			<header className="mb-4">
				<h1 className="text-3xl">Profile Page</h1>
				<h2 className="text-2xl">{user?.name}</h2>
			</header>
		</section>
	);
}