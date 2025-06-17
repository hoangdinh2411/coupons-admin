import { AuthResponse, LoginRequestPayload, RegisterRequestPayLoad, VerifyRequestPayload } from "@/types/auth.type";
import request from "./api";


class AuthService {
    static async login(payload: LoginRequestPayload) {
        return await request<AuthResponse>(`/auth/sign-in`, {
            method: "POST",
            body: JSON.stringify(payload),
        });
    }
    static async register(payload: RegisterRequestPayLoad) {
        return await request<AuthResponse>(`/auth/sign-up`, {
            method: "POST",
            body: JSON.stringify(payload),
        });
    }
    static async verify(payload: VerifyRequestPayload) {
        return await request(`/auth/verify-account`, {
            method: "PATCH",
            body: JSON.stringify(payload),
        });
    }

}

export default AuthService;
