import type { Metadata } from "next";
import { Poppins, Rubik } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
	subsets: ["latin"],
	weight: "400",
	variable: "--font-poppins",
});
const rubik = Rubik({
	subsets: ["latin"],
	weight: "600",
	variable: "--font-rubik",
});

export const metadata: Metadata = {
	keywords: [
		"portfolio",
		"web developer",
		"web",
		"web dev",
		"developer",
		"PROGRAMMER ",
		"programmer ",
		"Przemek Lewtak",
	],
	authors: [
		{
			name: "Przemek Lewtak",
			url: "https://github.com/matchmakers69",
		},
	],
	creator: "Przemek Lewtak",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${poppins.variable} ${rubik.variable}`}>{children}</body>
		</html>
	);
}
