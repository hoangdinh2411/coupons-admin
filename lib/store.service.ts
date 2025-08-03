import { IStore } from "@/types/store.type";
import request from "./api";

export class StoreService {
    static async getStores() {
        return await request<IStore>(`/stores`, {
            method: 'GET'
        })
    }
    static async getStoreById(id: string) {
        const param = `/${id}`;
        return await request<IStore>(`/stores${param}`, {
            method: 'GET',
        })
    }
    static async updateStoreById(id: string, payload: IStore) {
        const param = `/${id}`;
        return await request<IStore>(`/stores${param}`, {
            method: 'PATCH',
            body: JSON.stringify(payload)
        })
    }
    static async createStoreById(id: string, payload: IStore) {
        const param = `/${id}`;
        return await request<IStore>(`/stores${param}`, {
            method: 'POST',
            body: JSON.stringify(payload)
        })
    }
    static async deleteStoreById(id: string) {
        const param = `/${id}`;
        return await request<IStore>(`/stores${param}`, {
            method: 'GET'
        })
    }
}