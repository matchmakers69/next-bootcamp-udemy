"use client";
import { useState } from "react";
import { SignInForm } from "../SignIn/SignInForm";
import SignUpForm from "../SignUp/SignUpForm/SignUpForm";
import { Modal } from "@/ui/components/Modal";

interface AuthModalProps {
	isSignIn: boolean;
}

function AuthModal({ isSignIn = false }: AuthModalProps) {
	const [state, setState] = useState({
		isModalOpen: false,
	});

	const handleToggleModal = (inView: boolean) => {
		setState((prevState) => ({
			...prevState,
			isModalOpen: inView,
		}));
	};

	const renderContent = (signInText: string, signUpText: string) => {
		return isSignIn ? signInText : signUpText;
	};

	return (
		<>
			<button
				onClick={() => handleToggleModal(true)}
				type="button"
				className={`${renderContent("bg-blue-400 text-white", "")} mr-3 rounded border  p-1 px-4 `}
			>
				{renderContent("Sign in", "Sign up")}
			</button>
			<Modal
				title={renderContent("Please sign in", "Please sign up")}
				onClose={() => handleToggleModal(false)}
				open={state.isModalOpen}
			>
				<div className="m-auto">
					<h2 className="text-center text-2xl font-light">
						{renderContent("Log into your account", "Create your open table account")}
					</h2>
				</div>
				{isSignIn ? <SignInForm /> : <SignUpForm />}
			</Modal>
		</>
	);
}

export default AuthModal;
