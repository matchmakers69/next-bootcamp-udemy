import { forwardRef, useId } from "react";
import { type FormInputProps } from "./defs";
import { cn } from "@/lib/utils";

const Input = forwardRef<HTMLInputElement, FormInputProps>(
	({ className, type, label, error, ...props }, ref) => {
		const id = useId();
		return (
			<>
				{label && (
					<label
						htmlFor={id}
						className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300"
					>
						{label}
					</label>
				)}
				<div className={cn("w-full", error ? "relative  rounded-md shadow-sm" : "static")}>
					<input
						type={type}
						className={cn(
							"border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
							className,
						)}
						// {...(name && register ? register(name) : {})}
						ref={ref}
						id={id}
						{...props}
					/>
					{error && <p className="mt-1 text-sm text-red-600 dark:text-red-500">{error.message}</p>}
				</div>
			</>
		);
	},
);

Input.displayName = "Input";

export default Input;
