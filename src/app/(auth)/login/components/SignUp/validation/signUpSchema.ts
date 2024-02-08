import { z } from "zod";

const phoneRegex = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/);

export const signUpSchema = z.object({
	firstName: z
		.string({
			required_error: "First name is required",
			invalid_type_error: "First name must be a string",
		})
		.min(2, "Must be at least 2 characters")
		.max(30, "Must be at least 30 characters"),
	lastName: z
		.string({
			required_error: "Last name is required",
			invalid_type_error: "Last name must be a string",
		})
		.min(2, "Must be at least 2 characters")
		.max(50, "Must be at least 50 characters"),
	email: z.string().min(1, { message: "Email is required" }).email("Invalid email address"),
	phone: z.string().regex(phoneRegex, "Invalid Number!"),

	city: z.string().min(3, "Must be at least 3 characters").max(20, "Must be at least 20 characters"),
	password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

export type SignUpFormValues = z.infer<typeof signUpSchema>;
