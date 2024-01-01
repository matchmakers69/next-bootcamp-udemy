import { SearchBar } from "@/ui/components/SearchBar";

const SearchHeader = () => {
	return (
		<div className="bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
			<div className="m-auto flex justify-center py-3 text-left text-lg">
				<SearchBar />
			</div>
		</div>
	);
};

export { SearchHeader };
