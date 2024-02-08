import { useSignUp } from "../hooks/useSignUp";
import { Button } from "@/ui/atoms/Button";
import { Input } from "@/ui/atoms/Input";

function SignUpForm() {
	const { errors, register, submit } = useSignUp();
	return (
		<div className="m-auto max-w-[420px] py-3 text-left text-lg">
			<form noValidate onSubmit={submit}>
				<div className="my-3 flex justify-between gap-3 text-sm">
					<Input type="text" placeholder="First name" {...register("firstName")} error={errors.firstName} />
					<Input type="text" placeholder="Last name" {...register("lastName")} error={errors.lastName} />
				</div>
				<div className="my-3 flex justify-between text-sm">
					<Input
						type="email"
						className="mr-3  w-full rounded"
						placeholder="Email"
						{...register("email")}
						error={errors.email}
					/>
				</div>
				<div className="my-3 flex justify-between gap-3 text-sm">
					<Input type="text" placeholder="Phone" {...register("phone")} error={errors.phone} />
					<Input type="text" placeholder="City" {...register("city")} error={errors.city} />
				</div>
				<div className="my-3 flex justify-between text-sm">
					<Input type="password" placeholder="Password" {...register("password")} error={errors.password} />
				</div>
				<Button type="submit" className="rounded bg-red-600 px-9 py-2 text-white" label="Sign in" />
			</form>
		</div>
	);
}

export default SignUpForm;
