"use client";

import { useController } from "react-hook-form";
import { useSearch } from "./hooks/useSearch";
import { Input } from "@/ui/atoms/Input";
import { Button } from "@/ui/atoms/Button";

const SearchBar = () => {
	const { control, submit, errors } = useSearch();
	const { field: locationField } = useController({
		name: "location",
		control,
	});

	return (
		<div className="m-auto flex justify-center py-3 text-left text-lg">
			<form className="flex w-full max-w-[500px] items-center gap-4" noValidate onSubmit={submit}>
				<Input
					value={locationField.value ?? ""}
					onChange={locationField.onChange}
					type="text"
					className="mr-3 w-full rounded"
					placeholder="State, city or town"
					error={errors.location}
				/>
				<Button type="submit" className="rounded bg-red-600 py-2 text-white" label="Search location" />
			</form>
		</div>
	);
};

export { SearchBar };
