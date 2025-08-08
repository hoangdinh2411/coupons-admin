import { getToken } from '@/app/actions/getTokenFromCookie';
import UseAppStore from '@/store/useAppStore';
import { IResponse } from '@/types/share.type';
export const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:5173/api/v1';

export default async function customFetch<T>(
  url: string,
  config: RequestInit = {},
): Promise<IResponse<T>> {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), 60000);

  // Ensure headers is always an object
  const token = await getToken();
  config.headers = {
    ...config.headers,
    ['Authorization']: `Bearer ${token}`,
  };
  return fetch(`${BASE_URL + url}`, {
    signal: controller.signal,
    credentials: 'include',
    ...config,
  })
    .then((response) => {
      clearTimeout(id);
      return response.json();
    })
    .then((data: IResponse<T>) => {
      if (data.status === 401) {
        const signOut = UseAppStore((state) => state.signOut);
        signOut();
        return;
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
