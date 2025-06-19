// export const BASE_URL = 'https://coupons-trov.onrender.com/api/v1';
export const BASE_URL = 'http://localhost:5173/api/v1';
export interface IResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  status?: number;
}

export interface IResponseWithTotal<T> {
  results: T;
  total: number;
}
export default function customFetch<T>(
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
