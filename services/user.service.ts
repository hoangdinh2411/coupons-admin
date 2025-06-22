import { UserRequestPayload } from "@/types/auth.type";
import customFetchWithToken from "./customFetchWithToken";


export async function updateUser(payload: UserRequestPayload) {
    return await customFetchWithToken<any>(`/users/profile`, {
        method: "PATCH",
        body: JSON.stringify(payload)
    })
}