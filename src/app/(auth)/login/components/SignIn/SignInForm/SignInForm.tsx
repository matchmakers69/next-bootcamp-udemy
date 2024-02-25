import { useSignIn } from "../hooks/useSignIn";
import { Button } from "@/ui/atoms/Button";
import { Input } from "@/ui/atoms/Input";

function SignInForm() {
	const { errors, register, submit, isDirty, isSubmitting, isValid } = useSignIn();
	return (
		<div className="m-auto max-w-[420px] py-3 text-left text-lg">
			<form noValidate onSubmit={submit}>
				<div className="my-3 flex justify-between text-sm">
					<Input
						type="email"
						className="mr-3  w-full rounded"
						placeholder="Email"
						{...register("email")}
						error={errors.email}
					/>
				</div>

				<div className="my-3 flex justify-between text-sm">
					<Input type="password" placeholder="Password" {...register("password")} error={errors.password} />
				</div>
				<Button
					type="submit"
					disabled={!isDirty || !isValid || isSubmitting}
					className="rounded bg-red-600 px-9 py-2 text-white"
					label="Sign in"
				/>
			</form>
		</div>
	);
}

export default SignInForm;
