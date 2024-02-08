import { type SubmitHandler, useForm } from "react-hook-form";
import { useCallback } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { type SignUpFormValues, signUpSchema } from "../validation/signUpSchema";

export const useSignUp = () => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm<SignUpFormValues>({
		mode: "onChange",
		resolver: zodResolver(signUpSchema),
	});

	const handleSearchSubmit: SubmitHandler<SignUpFormValues> = useCallback(
		(data) => {
			console.log(data);
			// router.push(`/search?city=${data.location}`);
			reset();
		},
		[reset],
	);

	const submit = handleSubmit(handleSearchSubmit);

	return { register, errors, submit };
};
