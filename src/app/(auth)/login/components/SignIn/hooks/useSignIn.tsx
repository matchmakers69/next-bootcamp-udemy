import { type SubmitHandler, useForm } from "react-hook-form";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { signInSchema, type SignInFormValues } from "../SignInForm/validation/signInSchema";
import { handleApiError } from "@/utils/handleApiError";

export const useSignIn = () => {
	const [loading, setLoading] = useState(false);
	const router = useRouter();
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors, isDirty, isValid, isSubmitting },
	} = useForm<SignInFormValues>({
		mode: "onChange",
		resolver: zodResolver(signInSchema),
	});

	const handleLoginUser: SubmitHandler<SignInFormValues> = useCallback(
		async (data) => {
			try {
				setLoading(true);
				const response = await signIn("credentials", {
					redirect: false,
					email: data.email,
					password: data.password,
				});

				if (!response?.ok) {
					toast.error("Something went wrong!");
					return;
				}
				reset();
				toast.success("Welcome back!");
				router.push("/profile");
			} catch (error) {
				if (error instanceof Error) {
					handleApiError(error);
				} else {
					toast.error("Sorry possibly bad credentials!");
					console.error("Login failed");
				}
			} finally {
				setLoading(false);
			}
		},
		[reset, router],
	);

	const submit = handleSubmit(handleLoginUser);

	return { register, errors, submit, loading, isDirty, isSubmitting, isValid };
};
