import { type InputHTMLAttributes, forwardRef } from "react";
import { type FieldValues, type Path, type UseFormRegister } from "react-hook-form";
import { cn } from "@/lib/utils";

interface FormData {
	id?: string | number;
}

type InputProps = InputHTMLAttributes<HTMLInputElement>;

type FormInputProps<T extends FieldValues> = {
	name?: Path<T>;
	register?: UseFormRegister<T>;
} & InputProps;

const Input = forwardRef<HTMLInputElement, FormInputProps<FormData>>(
	({ className, register, name, type, ...props }, ref) => {
		return (
			<input
				type={type}
				className={cn(
					"border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
					className,
				)}
				{...(name && register ? register(name) : {})}
				ref={ref}
				{...props}
			/>
		);
	},
);

Input.displayName = "Input";

export { Input };
