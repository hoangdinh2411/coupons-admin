import {
  UserData,
  LoginRequestPayload,
  RegisterRequestPayLoad,
  VerifyRequestPayload,
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
export async function verify(payload: VerifyRequestPayload) {
  return await customFetch(`/auth/verify-account`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
}
export async function signOut() {
  return await fetch(`/api/sign-out`, {
    method: 'DELETE',
  });
}
