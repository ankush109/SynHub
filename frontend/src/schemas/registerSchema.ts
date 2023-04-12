import { z } from "zod";
import { emailSchema, nameSchema, passwordSchema, usernameSchema } from ".";

const registerSchema = z
  .object({
    name: nameSchema,
    username: usernameSchema,
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: z.string().trim(),
    picture: z.string().nullish(),
  })
  
  .refine(
    ({ confirmPassword, password }) => {
      return password === confirmPassword;
    },
    {
      path: ["confirmPassword"],
      message: "Passwords don't match",
    }
  );

export default registerSchema;
