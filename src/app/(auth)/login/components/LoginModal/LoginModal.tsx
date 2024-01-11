"use client";
import { useState } from "react";
import { Modal } from "@/ui/components/Modal";

interface LoginModalProps {
	isSignIn: boolean;
}

function LoginModal({ isSignIn = false }: LoginModalProps) {
	const [state, setState] = useState({
		isModalOpen: false,
	});

	const handleToggleModal = (inView: boolean) => {
		setState((prevState) => ({
			...prevState,
			isModalOpen: inView,
		}));
	};

	const getStylesWithTextForButtons = (signInText: string, signUpText: string) => {
		return isSignIn ? signInText : signUpText;
	};

	return (
		<>
			<button
				onClick={() => handleToggleModal(true)}
				type="button"
				className={`${getStylesWithTextForButtons(
					"bg-blue-400 text-white",
					"",
				)} mr-3 rounded border  p-1 px-4 `}
			>
				{getStylesWithTextForButtons("Sign in", "Sign up")}
			</button>
			<Modal
				title={getStylesWithTextForButtons("Please sign in", "Please sign up")}
				onClose={() => handleToggleModal(false)}
				open={state.isModalOpen}
			>
				Hello modal
			</Modal>
		</>
	);
}

export { LoginModal };
