'use server';
import { revalidateTag } from 'next/cache';
import { IResponseWithTotal } from '@/types/share.type';
import { StoreData, StorePayload } from '@/types/store.type';
import customFetch from './customFetch';
import { FilterPayload } from '@/types/filter.type';
import { LIMIT_DEFAULT } from '@/constants/variants';

export async function filterStore(data: FilterPayload) {
  return await customFetch<IResponseWithTotal<StoreData[]>>(`/stores/filter`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}
export async function getAllStores(page?: number, search_text?: string) {
  const params = new URLSearchParams();
  if (page) {
    params.append('page', page.toString());
    params.append('limit', LIMIT_DEFAULT.toString());
  }
  if (search_text) {
    params.append('search_text', search_text);
  }
  return await customFetch<IResponseWithTotal<StoreData[]>>(
    `/stores?${params.toString()}`,
    {
      method: 'GET',
      next: {
        tags: ['stores-data'],
      },
    },
  );
}
export async function getStoreById(id: string) {
  return await customFetch<StoreData>(`/stores/${id}`, {
    method: 'GET',
    next: {
      tags: [`store-${id}`],
    },
  });
}
export async function updateStore(id: number, payload: StorePayload) {
  const res = await customFetch<StoreData>(`/stores/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  if (res.success) {
    revalidateTag('stores-data');
    revalidateTag(`store-${id}`);
  }
  return res;
}
export async function deleteById(id: number) {
  const res = await customFetch<StoreData>(`/stores/${id}`, {
    method: 'DELETE',
  });
  if (res.success) {
    revalidateTag('stores-data');
  }
  return res;
}

export async function createStore(payload: StorePayload) {
  const res = await customFetch<StoreData>(`/stores`, {
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
