"use client";

import { useCallback } from "react";
import { type SubmitHandler } from "react-hook-form";
import { type TSearchValues } from "@/ui/components/SearchBar/types";
import { SearchBar } from "@/ui/components/SearchBar";

const SearchHeader = () => {
	const handleSearchSubmit: SubmitHandler<TSearchValues> = useCallback((data) => {
		console.log(data);
	}, []);
	return (
		<div className="bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
			<div className="m-auto flex justify-center py-3 text-left text-lg">
				<SearchBar submit={handleSearchSubmit} />
			</div>
		</div>
	);
};

export { SearchHeader };
