import { type UserSignUp } from "./interfaces/defs";
import clientApi from "@/config/axios";

export const signUpUserApi = async (signUpUserValues: UserSignUp) => {
	const res = await clientApi.post("/signup", signUpUserValues);

	return res;
};
