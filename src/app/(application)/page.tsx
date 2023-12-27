import { Header } from "@/ui/components/Header";
import { RestaurantCard } from "@/ui/components/RestaurantCard";

export const siteConfig = {
	name: "Przemek Lewtak",
	description: "I am a Passionate Software Developer",
};

export default function Home() {
	return (
		<>
			<Header />
			<div className="mt-10 flex flex-wrap justify-center px-36 py-3">
				<RestaurantCard />
			</div>
		</>
	);
}
