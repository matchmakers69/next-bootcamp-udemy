import { type Metadata } from "next";
import { RestaurantNavbar } from "../components/RestaurantNavbar";
import { MenuCard } from "./components/MenuCard";
import getMenuItems from "@/app/actions/getMenuItems";

export const metadata: Metadata = {
	title: {
		default: "Menu of Milestones Grill (Toronto) | OpenTable ",
		template: `%s - Software Engineer`,
	},
	description: "This is search",
};

const RestaurantMenu = async ({ params }: { params: { slug: string } }) => {
	const menuItems = await getMenuItems(params.slug);
	if (!menuItems) return;

	return (
		<div className="w-[100%] rounded bg-white p-3 shadow">
			<RestaurantNavbar slug={params.slug} />
			<section className="mt-5 bg-white">
				<div>
					<div className="mb-1 mt-4 pb-1">
						<h1 className="text-4xl font-bold">Menu</h1>
					</div>
					<div className="flex flex-wrap justify-between">
						{menuItems.length ? (
							menuItems.map((menuItem) => <MenuCard key={menuItem.id} menuItem={menuItem} />)
						) : (
							<p className="font-semibold">This restaurant does not have a menu</p>
						)}
					</div>
				</div>
			</section>
		</div>
	);
};

export default RestaurantMenu;
