import { type Metadata } from "next";
import { SearchHeader } from "./components/SearchHeader";
import { SearchSidebar } from "./components/SearchSidebar";
import { RestaurantCard } from "./components/RestaurantCard";
import getRestaurantsByCity from "@/app/actions/getRestaurantsByCity";
import getLocations from "@/app/actions/getLocations";
import getCuisines from "@/app/actions/getCuisines";
import { type SearchParams } from "@/api/services/interfaces/defs";

export const metadata: Metadata = {
	title: {
		default: "Search restaurants | OpenTable ",
		template: `%s - Software Engineer`,
	},
	description: "This is search",
};

const Search = async ({ searchParams }: { searchParams: SearchParams }) => {
	const restaurants = await getRestaurantsByCity(searchParams);
	const locations = await getLocations();
	const cuisines = await getCuisines();

	return (
		<>
			<div className="bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
				<SearchHeader />
			</div>
			<div className="m-auto flex w-2/3 items-start justify-between py-4">
				<SearchSidebar locations={locations} cuisines={cuisines} searchParams={searchParams} />
				<div className="w-5/6">
					{restaurants.length ? (
						restaurants.map((restaurant) => <RestaurantCard key={restaurant.id} restaurant={restaurant} />)
					) : (
						<p>Sorry, we found no restaurants in this area</p>
					)}
				</div>
			</div>
		</>
	);
};

export default Search;
