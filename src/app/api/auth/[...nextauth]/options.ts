import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
	session: {
		strategy: "jwt",
	},
	debug: process.env.NODE_ENV === "development",
	providers: [
		CredentialsProvider({
			name: "signin",
			credentials: {
				email: {
					label: "Email",
					type: "email",
					placeholder: "example@example.com",
				},
				password: {
					label: "Password",
					type: "password",
				},
			},
			async authorize(credentials) {
				if (!credentials?.email || !credentials.password) {
					throw new Error("Invalid credentials");
				}
				// Handle auth
				const user = { id: "1", name: "Przemek", email: "test@test.com" };
				return user;
			},
		}),
	],
};

export default NextAuth(authOptions);
