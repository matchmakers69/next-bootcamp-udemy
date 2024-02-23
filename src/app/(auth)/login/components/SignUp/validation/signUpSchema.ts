import { z } from "zod";

const phoneRegex = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/);

export const signUpSchema = z
	.object({
		name: z
			.string({
				required_error: "First name is required",
				invalid_type_error: "First name must be a string",
			})
			.min(2, "Must be at least 2 characters")
			.max(30, "Must be at least 30 characters"),

		email: z.string().min(1, { message: "Email is required" }).email("Invalid email address"),
		phone: z.string().regex(phoneRegex, "Invalid Number!"),

		city: z.string().min(3, "Must be at least 3 characters").max(20, "Must be at least 20 characters"),
		password: z
			.string({ required_error: "Password is required" })
			.trim()
			.min(6, { message: "Password must be at least 6 characters" }),
		confirmPassword: z
			.string({ required_error: "Confirm your password is required" })
			.min(6, "Password must have at least 6 characters")
			.max(20, "Password must be up to 20 characters"),
	})
	.refine((values) => values.password === values.confirmPassword, {
		message: "Password and Confirm Password doesn't match!",
		path: ["confirmPassword"],
	});

export type SignUpFormValues = z.infer<typeof signUpSchema>;
