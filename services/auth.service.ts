import { LoginRequestPayload, RegisterRequestPayLoad } from "@/types/auth.type";
import request from "./fetch";


interface User {
    id: string;
    name: string;
    email: string;
    role: string;
}
class AuthService {
    static async login(payload: LoginRequestPayload) {
        return await request(`/auth/sign-in`, {
            method: "POST",
            body: JSON.stringify(payload),
        });
    }
    static async register(payload: RegisterRequestPayLoad) {
        return await request(`/auth/sign-up`, {
            method: "POST",
            body: JSON.stringify(payload),
        });
    }

}

export default AuthService;
