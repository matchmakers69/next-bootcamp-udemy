import { type Metadata } from "next";
import { SearchHeader } from "./components/SearchHeader";
import { SearchSidebar } from "./components/SearchSidebar";
import { RestaurantCard } from "./components/RestaurantCard";

export const metadata: Metadata = {
	title: {
		default: "Search restaurants | OpenTable ",
		template: `%s - Software Engineer`,
	},
	description: "This is search",
};

const Search = () => {
	return (
		<>
			<div className="bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
				<SearchHeader />
			</div>
			<div className="m-auto flex w-2/3 items-start justify-between py-4">
				<SearchSidebar />
				<div className="w-5/6">
					<RestaurantCard />
				</div>
			</div>
		</>
	);
};

export default Search;
