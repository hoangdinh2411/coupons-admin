'use server';
import { revalidateTag } from 'next/cache';
import { IResponseWithTotal } from '@/types/share.type';
import { StoreData, StorePayload } from '@/types/store.type';
import customFetchWithToken from './customFetchWithToken';
import { FilterPayload } from '@/types/filter.type';
import { LIMIT_DEFAULT } from '@/constants/variants';

export async function filterStore(data: FilterPayload) {
  return await customFetchWithToken<IResponseWithTotal<StoreData[]>>(
    `/stores/filter`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    },
  );
}
export async function getAllStores(page?: number, search_text?: string) {
  const query = `?page=${page}&limit=${LIMIT_DEFAULT}&search_text=${search_text}`;
  return await customFetchWithToken<IResponseWithTotal<StoreData[]>>(
    `/stores${query}`,
    {
      method: 'GET',
      next: {
        tags: ['stores-data'],
      },
    },
  );
}
export async function getStoreById(id: string) {
  return await customFetchWithToken<StoreData>(`/stores/${id}`, {
    method: 'GET',
    next: {
      tags: [`store-${id}`],
    },
  });
}
export async function updateStore(id: number, payload: StorePayload) {
  const res = await customFetchWithToken<StoreData>(`/stores/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  if (res.success) {
    revalidateTag('stores-data');
  }
  return res;
}
export async function deleteById(id: number) {
  const res = await customFetchWithToken<StoreData>(`/stores/${id}`, {
    method: 'DELETE',
  });
  if (res.success) {
    revalidateTag('stores-data');
  }
  return res;
}

export async function createStore(payload: StorePayload) {
  const res = await customFetchWithToken<StoreData>(`/stores`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (res.success) {
    revalidateTag('stores-data');
  }
  return res;
}
