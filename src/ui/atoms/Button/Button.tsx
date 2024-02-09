import { forwardRef, type ForwardedRef } from "react";
import { type ButtonProps } from "./defs";
import { cn } from "@/lib/utils";

const Button = forwardRef(
	({ label, className, ...rest }: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
		return (
			<button
				ref={ref}
				{...rest}
				className={cn(
					"min-h-[40px] min-w-[150px] rounded-md bg-blue-600 px-2 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
					className,
				)}
			>
				{label}
			</button>
		);
	},
);

Button.displayName = "Button";
export default Button;
