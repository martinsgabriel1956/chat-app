import { z as zod } from 'zod';

export const loginSchema = zod.object({
  email: zod.string().min(1, 'Email is required').email('Invalid email'),
  password: zod.string().min(8, 'Password is required'),
});

export type LoginFormData = zod.infer<typeof loginSchema>;
