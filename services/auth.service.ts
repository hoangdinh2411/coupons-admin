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
    body: JSON.stringify(payload),
  });
}
export async function register(payload: RegisterRequestPayLoad) {
  return await customFetch<UserData>(`/auth/sign-up`, {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}
export async function verify(payload: VerifyRequestPayload) {
  return await customFetch(`/auth/verify-account`, {
    method: 'PATCH',
    body: JSON.stringify(payload),
  });
}
