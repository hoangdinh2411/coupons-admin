'use server';
import { signIn } from '@/services/auth.service';
import { cookies } from 'next/headers';
import { UserData } from '@/types/auth.type';
import { ROLES } from '@/types/enum';
import { signinSchema } from '@/helper/schemas/auth.schema';
type SignInActionState = {
  errors?: {
    email?: string[];
    password?: string[];
  };
  data?: UserData;
  error?: string;
};

export async function loginAction(
  _prevState: SignInActionState,
  formData: FormData,
): Promise<SignInActionState> {
  const cookieStore = await cookies();
  const form = Object.fromEntries(formData);
  const validateResult = signinSchema.safeParse(form);
  if (!validateResult.success) {
    return {
      errors: validateResult.error.flatten().fieldErrors,
    };
  }
  const res = await signIn(validateResult.data);

  if (!res.success) {
    return { error: res.message };
  }
  if (!res.data) {
    return { error: 'Missing user data' };
  }
  if ((res.data?.role as ROLES) !== ROLES.ADMIN) {
    return {
      error: 'Done have permission',
    };
  }
  const isProd = process.env.NODE_ENV === 'production';
  cookieStore.set('session', res.data.token || '', {
    httpOnly: true,
    secure: isProd,
    sameSite: isProd ? 'none' : 'lax',
    path: '/',
    maxAge: 1000 * 60 * 60 * 24,
  });
  return {
    data: res.data,
  };
}
