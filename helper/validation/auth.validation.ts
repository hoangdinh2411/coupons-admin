import { z } from "zod";

export const authLoginSchema = z
    .object({
        email: z.string().email({ message: "Invalid email address" }),
        password: z.string().min(6, { message: "Password must be at least 6 characters" }),
    })

export const registerSchema = z
    .object({
        email: z.string().email({ message: "Invalid email address" }),
        password: z.string().min(6, { message: "Password must be at least 6 characters" }),
        confirmPassword: z.string().min(6, { message: "Confirm password cannot be empty" }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });

export type AuthLoginSchemaType = z.infer<typeof authLoginSchema>;
export type AuthRegisterSchemaType = z.infer<typeof registerSchema>;
