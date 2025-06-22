'use server';
import { IResponse } from '@/types/request.type';
import { cookies } from 'next/headers';
import customFetch from './customFetch';

export default async function customFetchWithToken<T>(
  url: string,
  config: RequestInit = {},
): Promise<IResponse<T>> {
  const cookieStore = await cookies();
  const token = cookieStore.get('access_token')?.value;
  if (token) {
    config.headers = {
      ['Cookie']: `token=${token}`,
    };
  }
  return await customFetch(url, config);
}
