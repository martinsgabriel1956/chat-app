import { z as zod } from 'zod';

export const registerSchema = zod.object({
  name: zod.string().min(1, 'Name is required'),
  email: zod.string().min(1, 'Email is required').email('Invalid email'),
  password: zod.string().min(8, 'Password is required'),
});

export type RegisterFormData = zod.infer<typeof registerSchema>;
