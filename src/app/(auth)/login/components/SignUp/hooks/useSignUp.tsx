import { type SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useCallback, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { type SignUpFormValues, signUpSchema } from "../validation/signUpSchema";
import { signUpUserApi } from "@/apiClientServices/signUpUser.api";
import { handleApiError } from "@/utils/handleApiError";

export const useSignUp = () => {
	const [loading, setLoading] = useState(false);
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors, isDirty, isSubmitting, isValid },
	} = useForm<SignUpFormValues>({
		mode: "onChange",
		resolver: zodResolver(signUpSchema),
	});

	const handleRegisterUser: SubmitHandler<SignUpFormValues> = useCallback(
		async (data) => {
			try {
				setLoading(true);
				const response = await signUpUserApi(data);
				reset();
				if ("error" in response) {
					toast.error("Cannot sign up user");
				} else {
					toast.success("Congrats! You are signed in!");
				}
				setLoading(false);
			} catch (error: unknown) {
				if (error instanceof Error) {
					handleApiError(error);
				} else {
					toast.error("Sorry possibly bad credentials!");

					console.error("Signing up failed");
				}
			} finally {
				setLoading(false);
			}
		},
		[reset],
	);

	const submit = handleSubmit(handleRegisterUser);

	return { register, errors, submit, loading, isDirty, isSubmitting, isValid };
};
