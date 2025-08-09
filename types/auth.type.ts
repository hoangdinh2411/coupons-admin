import { ROLES } from './enum';

export interface LoginRequestPayload {
  email: string;
  password: string;
}
export interface RegisterRequestPayLoad extends LoginRequestPayload {
  confirm_password: string;
  first_name?: string;
  last_name?: string;
}

export interface UserData extends RegisterRequestPayLoad {
  email_verified: boolean;
  role: ROLES;
  token?: string;
  description?: string;
  youtube?: string;
  facebook?: string;
  linkedin?: string;
  instagram?: string;
}
export interface VerifyRequestPayload {
  email: string;
  code: number;
  type: string;
}
export interface ForgetRequestPayload {
  email: string;
}

export interface UserRequestPayload {
  first_name: string;
  last_name: string;
  description: string;
  youtube: string;
  facebook: string;
  linkedin: string;
  instagram: string;
}

export interface ChangePassRequestPayload {
  password: string;
  confirm_password: string;
  reset_token: string;
}
