import { Header } from "@/ui/components/Header";
import { NavBar } from "@/ui/components/Navbar";
import { RestaurantCard } from "@/ui/components/RestaurantCard";

export const siteConfig = {
	name: "Przemek Lewtak",
	description: "I am a Passionate Software Developer",
};

export default function Home() {
	return (
		<main className="min-h-screen w-screen bg-gray-100">
			<section className="m-auto max-w-screen-2xl bg-white">
				<NavBar />
				<section>
					<Header />
					<div className="mt-10 flex flex-wrap justify-center px-36 py-3">
						<RestaurantCard />
					</div>
				</section>
			</section>
		</main>
	);
}
