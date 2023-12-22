"use client";

import { type SubmitHandler } from "react-hook-form";
import { useCallback } from "react";
import { SearchBar } from "../SearchBar";
import { type TSearchValues } from "@/ui/components/SearchBar/types";

const Header = () => {
	const handleSearchSubmit: SubmitHandler<TSearchValues> = useCallback((data) => {
		console.log(data);
	}, []);
	return (
		<div className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
			<div className="mt-10 text-center">
				<h1 className="mb-2 text-5xl font-bold text-white">Find your table for any occasion</h1>
				<SearchBar submit={handleSearchSubmit} />
			</div>
		</div>
	);
};

export { Header };
