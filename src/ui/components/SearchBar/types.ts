import type * as Yup from "yup";
import { type searchValidation } from "./validation";
export type TSearchValues = Yup.InferType<typeof searchValidation>;
