import { type ComponentProps } from "react";

export type ButtonProps = Readonly<{
	label: string;
}> &
	ComponentProps<"button">;
