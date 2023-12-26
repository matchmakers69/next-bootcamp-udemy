import { SearchHeader } from "./components/SearchHeader";
import { SearchSidebar } from "./components/SearchSidebar";
import { RestaurantCard } from "./components/RestaurantCard";
import { NavBar } from "@/ui/components/Navbar";

const Search = () => {
	return (
		<section className="min-h-screen w-screen bg-gray-100">
			<section className="m-auto max-w-screen-2xl bg-white">
				<NavBar />
				<div className="bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
					<SearchHeader />
				</div>
				<div className="m-auto flex w-2/3 items-start justify-between py-4">
					<SearchSidebar />
					<div className="w-5/6">
						<RestaurantCard />
					</div>
				</div>
			</section>
		</section>
	);
};

export default Search;
