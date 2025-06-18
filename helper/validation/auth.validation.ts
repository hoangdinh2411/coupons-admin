import { z } from 'zod';

export const authLoginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(3, { message: 'Password must be at least 6 characters' }),
});

export const registerSchema = z
  .object({
    first_name: z
      .string()
      .min(1, { message: 'First name is required' })
      .max(50, { message: 'First name is too long' }),
    last_name: z
      .string()
      .min(1, { message: 'Last name is required' })
      .max(50, { message: 'Last name is too long' }),
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
    confirm_password: z.string().min(1, { message: 'Confirm password is required' }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type AuthRegisterSchemaType = z.infer<typeof registerSchema>;
