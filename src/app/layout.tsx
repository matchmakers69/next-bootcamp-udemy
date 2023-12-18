import type { Metadata } from "next";
import { Poppins, Rubik } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { siteConfig } from "./page";

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
  title: {
    default: siteConfig.name,
    template: `%s - Software Engineer`,
  },
  description: siteConfig.description,
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${rubik.variable}`}>
        <main
          className={cn(
            "bg-transparent bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] max-sm:pt-20",
            { "bg-white": "#E6E7EB" },
          )}
        >
          {/* NAVBAR ->  */}

          {children}
        </main>
      </body>
    </html>
  );
}
