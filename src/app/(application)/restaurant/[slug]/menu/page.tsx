import { type Metadata } from "next";
import { RestaurantNavbar } from "../components/RestaurantNavbar";
import { MenuCard } from "./components/MenuCard";

export const metadata: Metadata = {
	title: {
		default: "Menu of Milestones Grill (Toronto) | OpenTable ",
		template: `%s - Software Engineer`,
	},
	description: "This is search",
};

const RestaurantMenu = () => {
	return (
		<div className="w-[100%] rounded bg-white p-3 shadow">
			<RestaurantNavbar />
			<MenuCard />
		</div>
	);
};

export default RestaurantMenu;
