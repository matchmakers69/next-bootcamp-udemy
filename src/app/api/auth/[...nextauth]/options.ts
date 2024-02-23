import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/db";

export const authOptions: NextAuthOptions = {
	debug: process.env.NODE_ENV === "development",
	session: {
		strategy: "jwt",
	},
	pages: {
		signIn: "/", // If there was a specific page for login user should be redirected there
	},
	secret: process.env.NEXTAUTH_SECRET,
	adapter: PrismaAdapter(prisma),
	providers: [
		CredentialsProvider({
			name: "Sign in",
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
					//return null;
					throw new Error("Invalid credentials");
				}
				const user = await prisma.user.findUnique({
					where: {
						email: credentials.email,
					},
				});

				if (!user?.password) {
					throw new Error("Invalid credentials");
				}

				const isValidPassword = await bcrypt.compare(credentials.password, user.password);

				if (!isValidPassword) {
					throw new Error("Sorry invalid password");
				}
				return user;
			},
		}),
	],
	callbacks: {
		session: ({ session, token }) => {
			return {
				...session,
				user: {
					...session.user,
					id: token.id,
				},
			};
		},
		jwt: ({ token, user }) => {
			if (user) {
				const u = user;
				return {
					...token,
					id: u.id,
				};
			}
			return token;
		},
	},
};

export default NextAuth(authOptions);
