import { StepperWizard } from "@/ui/components/StepperWizard";
import getCurrentUser from "@/app/actions/getCurrentUser";

export default async function ProfilePage() {
	const currentUser = await getCurrentUser();
	// if (!currentUser) {
	// 	return;
	// } Moze byc potrzebne do wykonania zapytania do bazy (np parametr potrzebny do calla jak currentUser.id)
	// Getting session information on server - will not be required to use session with redirect once middleware added
	// const session = await getServerSession(authOptions);

	// if (!session) {
	// 	redirect("/");
	// }

	return (
		<section className="container mx-auto text-center">
			<header className="mb-4">
				<h1 className="text-3xl">Profile Page</h1>
				<h2 className="text-2xl">
					{currentUser ? `You are signed in as ${currentUser.name}` : "You are not signed in"}
				</h2>
			</header>
			<StepperWizard />
		</section>
	);
}
