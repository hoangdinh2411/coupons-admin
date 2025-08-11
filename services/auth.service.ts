import {
  UserData,
  LoginRequestPayload,
  RegisterRequestPayLoad,
  VerifyRequestPayload,
  ForgetRequestPayload,
  ChangePassRequestPayload,
} from '@/types/auth.type';
import customFetch from './customFetch';

export async function signIn(payload: LoginRequestPayload) {
  return await customFetch<UserData>(`/auth/sign-in`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
}
export async function register(payload: RegisterRequestPayLoad) {
  return await customFetch<UserData>(`/auth/sign-up`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
}
export async function verify(payload: VerifyRequestPayload): Promise<any> {
  return await customFetch(`/auth/verify-code`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
}
export async function signOut() {
  return await fetch(`${process.env.NEXT_PUBLIC_APP_DOMAIN}/api/sign-out`, {
    method: 'DELETE',
  });
}

export async function forgetPassword(payload: ForgetRequestPayload) {
  return await customFetch(`/auth/forget-password`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
}

export async function changePassword(payload: ChangePassRequestPayload) {
  return await customFetch(`/auth/change-pass`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
}
