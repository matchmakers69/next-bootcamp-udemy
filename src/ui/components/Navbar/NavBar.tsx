import Link from "next/link";
import React from "react";
import { LoginModal } from "@/app/(auth)/login/components/LoginModal/LoginModal";

const NavBar = () => {
	return (
		<nav className="flex justify-between bg-white p-2">
			<Link href="/" className="text-2xl font-bold text-gray-700">
				{" "}
				OpenTable{" "}
			</Link>
			<div>
				<div className="flex">
					<LoginModal isSignIn />
					<LoginModal isSignIn={false} />
				</div>
			</div>
		</nav>
	);
};

export { NavBar };
