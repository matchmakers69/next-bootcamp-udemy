"use client";

import { useController } from "react-hook-form";
import { Input } from "../../atoms/Input";
import { useSearch } from "./hooks/useSearch";

const SearchBar = () => {
	const { control, submit } = useSearch();
	const { field: locationField } = useController({
		name: "location",
		control,
	});

	return (
		<div className="m-auto flex justify-center py-3 text-left text-lg">
			<form className="flex items-center" noValidate onSubmit={submit}>
				<Input
					value={locationField.value ?? ""}
					onChange={locationField.onChange}
					type="text"
					className="mr-3  w-[450px] rounded"
					placeholder="State, city or town"
				/>
				<button type="submit" className="rounded bg-red-600 px-9 py-2 text-white">
					Let's go
				</button>
			</form>
		</div>
	);
};

export { SearchBar };
