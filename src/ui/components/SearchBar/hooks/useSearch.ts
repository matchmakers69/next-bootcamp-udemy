import { useRouter } from "next/navigation";
import { type SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { type SearchFormValues, searchSchema } from "../validation";

export const useSearch = () => {
	const router = useRouter();
	const {
		control,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<SearchFormValues>({
		resolver: zodResolver(searchSchema),
		mode: "onChange",
		defaultValues: {
			location: "",
		},
	});

	const handleSearchSubmit: SubmitHandler<SearchFormValues> = useCallback(
		(data) => {
			console.log(data);
			router.push(`/search?city=${data.location}`);
			reset();
		},
		[reset, router],
	);

	const submit = handleSubmit(handleSearchSubmit);

	return { control, submit, errors };
};
