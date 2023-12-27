import type { Metadata } from "next";
import { Header } from "@/ui/components/Header";
import { RestaurantCard } from "@/ui/components/RestaurantCard";

export const metadata: Metadata = {
	title: {
		default: "Udemy Next v13 course",
		template: `%s - Software Engineer`,
	},
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
