import * as yup from "yup";

export const searchValidation = yup.object().shape({
	location: yup
		.string()
		.max(20, "Maximum 20 characters")
		.min(2, "Minimum 2 characters")
		.required("Location is required"),
});
