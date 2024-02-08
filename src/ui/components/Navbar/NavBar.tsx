import Link from "next/link";
import React from "react";
import { AuthModal } from "@/app/(auth)/login/components/AuthModal";

const NavBar = () => {
	return (
		<nav className="flex justify-between bg-white p-2">
			<Link href="/" className="text-2xl font-bold text-gray-700">
				{" "}
				OpenTable{" "}
			</Link>
			<div>
				<div className="flex">
					<AuthModal isSignIn />
					<AuthModal isSignIn={false} />
				</div>
			</div>
		</nav>
	);
};

export { NavBar };
