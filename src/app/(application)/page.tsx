import type { Metadata } from "next";
import getRestaurants from "../actions/getRestaurants";
import { Header } from "@/ui/components/Header";
import { RestaurantCard } from "@/ui/components/RestaurantCard";

export const metadata: Metadata = {
	title: {
		default: "Udemy Next v13 course",
		template: `%s - Software Engineer`,
	},
	description: "I am a Passionate Software Developer",
};

export default async function Home() {
	const restaurants = await getRestaurants();
	if (!restaurants) return;

	return (
		<>
			<Header />
			<div className="mt-10 flex flex-wrap justify-center px-36 py-3">
				{restaurants.map((restaurant) => (
					<RestaurantCard key={restaurant.id} restaurant={restaurant} />
				))}
			</div>
		</>
	);
}
