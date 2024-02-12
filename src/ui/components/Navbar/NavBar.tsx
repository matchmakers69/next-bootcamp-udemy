"use client";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import React, { useState } from "react";
import { AuthModal } from "@/app/(auth)/login/components/AuthModal";
import { Button } from "@/ui/atoms/Button";

const NavBar = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isSignIn, setIsSignIn] = useState(true);

	const { data: session, status } = useSession();
	const user = session?.user;

	const handleToggleModal = () => {
		setIsModalOpen(!isModalOpen);
	};

	const handleOpenSignInModal = () => {
		setIsSignIn(true);
		setIsModalOpen(true);
	};

	const handleOpenSignUpModal = () => {
		setIsSignIn(false);
		setIsModalOpen(true);
	};

	if (status === "loading") {
		return <div>Loading...</div>;
	}

	return (
		<nav className="flex justify-between bg-white p-2">
			<Link href="/" className="text-2xl font-bold text-gray-700">
				{" "}
				OpenTable{" "}
			</Link>
			<div>
				<div className="flex">
					{!user && (
						<>
							<Button onClick={handleOpenSignInModal} className="mr-3 bg-blue-500" label="Sign in" />
							<Button
								onClick={handleOpenSignUpModal}
								className="border bg-white text-gray-900"
								label="Sign up"
							/>
							<AuthModal isOpen={isModalOpen} isSignIn={isSignIn} onClose={handleToggleModal} />
						</>
					)}
					{user && (
						<Button
							onClick={() =>
								signOut({
									redirect: true,
									callbackUrl: `${window.location.origin}`,
								})
							}
							className="bg-red-500 text-white"
							label="Sign out"
						/>
					)}
				</div>
			</div>
		</nav>
	);
};

export { NavBar };
