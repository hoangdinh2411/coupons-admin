import { SignOutAction } from '@/app/actions/sign-out.action';
import { APP_ROUTE } from '@/constants/route';
import { IResponse } from '@/types/share.type';
import { redirect } from 'next/navigation';

export const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:5173/api/v1';

export default async function customFetch<T>(
  url: string,
  config: RequestInit = {},
): Promise<IResponse<T>> {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), 60000);

  return fetch(`${BASE_URL + url}`, {
    ...config,
    signal: controller.signal,
    headers: {
      'Content-Type': 'application/json',
      ...config.headers,
    },
    credentials: 'include',
  })
    .then((response) => {
      clearTimeout(id);
      return response.json();
    })
    .then((data: IResponse<T>) => {
      console.log('response', data);
      if (data.status === 401) {
        if (window !== undefined) {
          window.location.href = 'logout';
        }
        throw new Error('Unauthorized access, please sign in again');
      }
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
