'use server';
import { IResponse } from '@/types/request.type';
import { cookies } from 'next/headers';

// export const BASE_URL = 'https://coupons-trov.onrender.com/api/v1';
const BASE_URL = 'http://localhost:5173/api/v1';

export default async function customFetch<T>(
  url: string,
  config: RequestInit = {},
): Promise<IResponse<T>> {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), 60000);
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;
  return fetch(`${BASE_URL + url}`, {
    ...config,
    signal: controller.signal,
    headers: {
      'Content-Type': 'application/json',
      Cookie: `token=${token}`,
      ...config.headers,
    },
    credentials: 'include',
  })
    .then((response) => {
      clearTimeout(id);
      return response.json();
    })
    .then((data) => {
      return data as T;
    })
    .catch((error) => {
      if (error.name === 'AbortError') {
        return {
          success: false,
          message: 'Request timeout, please try again later',
          status: 408,
        };
      }
      return error;
    });
}
