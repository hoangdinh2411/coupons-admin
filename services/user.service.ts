'use server';
import { UserData, UserRequestPayload } from '@/types/auth.type';
import customFetchWithToken from './customFetchWithToken';
import { revalidateTag } from 'next/cache';

export async function updateUser(payload: UserRequestPayload) {
  const res = await customFetchWithToken<UserData>(`/users/profile`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  if (res.success) {
    revalidateTag('profile');
  }
  return res;
}

export async function getProfile() {
  return await customFetchWithToken<UserData>('/users/profile', {
    next: {
      tags: ['profile'],
    },
  });
}
