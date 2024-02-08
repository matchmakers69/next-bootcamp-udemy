import { z } from "zod";

export const searchSchema = z.object({
	location: z.string().min(3, "Must be at least 3 characters").max(30, "Must be max 30 characters"),
});

export type SearchFormValues = z.infer<typeof searchSchema>;
