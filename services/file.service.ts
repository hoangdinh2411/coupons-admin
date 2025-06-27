'use server';
import { ImageType } from '@/shared/layouts-components/uploadFile/UploadFile';
import customFetchWithToken from './customFetchWithToken';

export async function uploadFile(payload: FormData) {
  return await customFetchWithToken<ImageType[]>(`/files`, {
    method: 'POST',
    body: payload,
  });
}
export async function deleteFile(public_id: string) {
  return await customFetchWithToken(`/files?public_id=${public_id}`, {
    method: 'DELETE',
  });
}
