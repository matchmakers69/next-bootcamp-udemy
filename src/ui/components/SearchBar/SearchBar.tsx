"use client";

import { useRouter } from "next/navigation";
import { type SubmitHandler, useForm, useController } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../../atoms/Input";
import { type TSearchValues } from "./types";
import { searchValidation } from "./validation";

interface SearchBarProps {
	submit: SubmitHandler<TSearchValues>;
}

const SearchBar = ({ submit }: SearchBarProps) => {
	const router = useRouter();
	const { control, handleSubmit } = useForm<TSearchValues>({
		resolver: yupResolver(searchValidation),
		mode: "onChange",
		defaultValues: {
			location: "",
		},
	});

	const { field: locationField } = useController({
		name: "location",
		control,
	});

	return (
		<div className="m-auto flex justify-center py-3 text-left text-lg">
			<form className="flex items-center" noValidate onSubmit={handleSubmit(submit)}>
				<Input
					value={locationField.value ?? ""}
					onChange={locationField.onChange}
					type="text"
					className="mr-3  w-[450px] rounded"
					placeholder="State, city or town"
				/>
				<button onClick={() => router.push("/search")} className="rounded bg-red-600 px-9 py-2 text-white">
					Let's go
				</button>
			</form>
		</div>
	);
};

export { SearchBar };
