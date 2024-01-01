import { useRouter } from "next/navigation";
import { type SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback } from "react";
import { searchValidation } from "@/ui/components/SearchBar/validation";
import { type TSearchValues } from "@/ui/components/SearchBar/types";

export const useSearch = () => {
	const router = useRouter();
	const { control, handleSubmit, reset } = useForm<TSearchValues>({
		resolver: yupResolver(searchValidation),
		mode: "onChange",
		defaultValues: {
			location: "",
		},
	});

	const handleSearchSubmit: SubmitHandler<TSearchValues> = useCallback(
		(data) => {
			console.log(data);
			router.push(`/search?city=${data.location}`);
			reset();
		},
		[reset, router],
	);

	const submit = handleSubmit(handleSearchSubmit);

	return { control, submit };
};
