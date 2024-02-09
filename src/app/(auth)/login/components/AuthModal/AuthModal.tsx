"use client";

import { SignInForm } from "../SignIn/SignInForm";
import SignUpForm from "../SignUp/SignUpForm/SignUpForm";
import { Modal } from "@/ui/components/Modal";

interface AuthModalProps {
	isSignIn: boolean;
	isOpen: boolean;
	onClose: () => void;
}

function AuthModal({ isSignIn = false, isOpen, onClose }: AuthModalProps) {
	const renderContent = (signInText: string, signUpText: string) => {
		return isSignIn ? signInText : signUpText;
	};

	return (
		<>
			<Modal title={renderContent("Please sign in", "Please sign up")} onClose={onClose} open={isOpen}>
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
