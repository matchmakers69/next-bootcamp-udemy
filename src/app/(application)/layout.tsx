import { type ReactNode } from "react";
import { NavBar } from "@/ui/components/Navbar";

function AppLayout({ children }: { children: ReactNode }) {
	return (
		<main className="min-h-screen w-screen bg-gray-100">
			<section className="m-auto max-w-screen-2xl bg-white">
				<NavBar />
				{children}
			</section>
		</main>
	);
}

export default AppLayout;
