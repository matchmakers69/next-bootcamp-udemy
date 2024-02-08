import { type SubmitHandler, useForm } from "react-hook-form";
import { useCallback } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema, type SignInFormValues } from "../SignInForm/validation/signInSchema";

export const useSignIn = () => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm<SignInFormValues>({
		mode: "onChange",
		resolver: zodResolver(signInSchema),
	});

	const handleSearchSubmit: SubmitHandler<SignInFormValues> = useCallback(
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
