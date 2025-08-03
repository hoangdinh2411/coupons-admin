'use server';
import { ImageType } from '@/shared/layouts-components/uploadFile/UploadFile';
import customFetch from './customFetch';

export async function uploadFile(payload: FormData) {
  return await customFetch<ImageType[]>(`/files`, {
    method: 'POST',
    body: payload,
  });
}
export async function deleteFiles(public_ids: string[]) {
  return await customFetch(`/files`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(public_ids),
  });
}
