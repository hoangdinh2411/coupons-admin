import { ROLES } from '@/store/useAppStore';

export interface LoginRequestPayload {
  email: string;
  password: string;
}
export interface RegisterRequestPayLoad extends LoginRequestPayload {
  confirm_password: string;
  first_name: string;
  last_name: string;
}

export interface AuthResponse extends LoginRequestPayload {
  email_verified: string;
  role: ROLES;
}
export interface VerifyRequestPayload {
  email: string;
  code: string;
}
