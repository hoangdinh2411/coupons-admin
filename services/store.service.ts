'use server';
import customFetch from './customFetch';
import { revalidateTag } from 'next/cache';
import { IResponse, IResponseWithTotal } from '@/types/request.type';
import { StoreData, StorePayload } from '@/types/store.type';
import customFetchWithToken from './customFetchWithToken';
import { FilterPayload } from '@/types/filter.type';

export async function searchStore(text: string) {
  return await customFetch<StoreData>(`/stores/search?name=${text}`, {
    method: 'GET',
  });
}

export async function filterStore(data: FilterPayload) {
  return await customFetch<IResponseWithTotal<StoreData[]>>(`/stores/filter`, {
    method: 'POST',
    body: JSON.stringify(data),
  });
}
export async function getAllStores(
  page?: number,
  limit?: number,
  search_text: string = '',
) {
  const query = `?page=${page ?? ''}&limit=${limit ?? ''}&search_text=${search_text ?? ''}`;
  return await customFetch<IResponseWithTotal<StoreData[]>>(`/stores${query}`, {
    method: 'GET',
    next: {
      tags: ['stores-data'],
    },
  });
}
export async function getStoreBySlug(slug: string) {
  return await customFetch<StoreData>(`/stores/${slug}`, {
    method: 'GET',
    next: {
      tags: [`store-${slug}`],
    },
  });
}
export async function updateStore(id: number, payload: StorePayload) {
  const param = `/${id}`;
  const res = await customFetchWithToken<StoreData>(`/stores${param}`, {
    method: 'PATCH',
    body: JSON.stringify(payload),
  });
  if (res.success) {
    revalidateTag('stores-data');
    revalidateTag('category-' + res.data?.slug);
  }
  return res;
}
export async function deleteById(id: number) {
  const param = `/${id}`;
  const res = await customFetchWithToken<StoreData>(`/stores${param}`, {
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
    body: JSON.stringify(payload),
  });

  if (res.success) {
    revalidateTag('stores-data');
  }
  return res;
}
