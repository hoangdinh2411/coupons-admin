
export interface LoginRequestPayload {
    email: string;
    password: string;
}
export interface RegisterRequestPayLoad {
    email: string,
    password: string,
    confirm_password: string,
    first_name: string,
    last_name: string
}