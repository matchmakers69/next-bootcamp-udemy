"use client";

import { useRouter } from "next/navigation";
import { type SubmitHandler, useForm, useController } from "react-hook-form";
import type * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../atoms/Input";
import { searchValidation } from "@/libs/validation/searchValidation";

export type TSearchValues = Yup.InferType<typeof searchValidation>;

const SearchBar = () => {
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

	const handleSearchFormSubmit: SubmitHandler<TSearchValues> = (data) => {
		console.log(data);
	};

	return (
		<div className="m-auto flex justify-center py-3 text-left text-lg">
			<form className="flex items-center" noValidate onSubmit={handleSubmit(handleSearchFormSubmit)}>
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

export default SearchBar;
