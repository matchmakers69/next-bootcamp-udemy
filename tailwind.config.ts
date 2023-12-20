import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./pages/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
	theme: {
		container: {
			padding: {
				DEFAULT: "1rem",
				sm: "2rem",
				lg: "4rem",
				xl: "5rem",
				"2xl": "6rem",
			},
			screens: {
				"2xl": "1100px",
			},
		},
		extend: {
			fontFamily: {
				poppins: ["var(--font-poppins)"],
				rubik: ["var(--font-rubik)"],
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
