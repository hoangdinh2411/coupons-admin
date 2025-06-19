import {
  UserData,
  LoginRequestPayload,
  RegisterRequestPayLoad,
  VerifyRequestPayload,
} from '@/types/auth.type';
import customFetch from './api';

class AuthService {
  static async login(payload: LoginRequestPayload) {
    return await customFetch<UserData>(`/auth/sign-in`, {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  }
  static async register(payload: RegisterRequestPayLoad) {
    return await customFetch<UserData>(`/auth/sign-up`, {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  }
  static async verify(payload: VerifyRequestPayload) {
    return await customFetch(`/auth/verify-account`, {
      method: 'PATCH',
      body: JSON.stringify(payload),
    });
  }
  static async signOut() {
    return await customFetch(`/auth/sign-out`, {
      method: 'POST',
    });
  }
  static async getProfile() {
    return await customFetch<UserData>('/users/profile', {
      cache: 'no-cache',
    });
  }
}

export default AuthService;
