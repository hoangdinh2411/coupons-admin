'use server';
import { UserData, UserRequestPayload } from '@/types/auth.type';
import customFetchWithToken from './customFetchWithToken';
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';

export async function updateUser(payload: UserRequestPayload) {
  const res = await customFetchWithToken<UserData>(`/users/profile`, {
    method: 'PATCH',
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
