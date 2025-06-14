import request from "./fetch";
interface LoginPayload {
    email: string;
    password: string;
}

interface User {
    id: string;
    name: string;
    email: string;
    role: string;
}
class AuthService {
    static async login(payload: LoginPayload) {
        return await request(`/categories`, {
            method: "GET",
            body: JSON.stringify(payload),
        });
    }
        
}

export default AuthService;
