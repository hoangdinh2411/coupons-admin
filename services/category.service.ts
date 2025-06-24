'use server';
import { CategoryData, CategoryPayload } from '@/types/category.type';
import customFetch from './customFetch';
import { revalidateTag } from 'next/cache';
import { IResponseWithTotal } from '@/types/share.type';
import customFetchWithToken from './customFetchWithToken';

export async function getCategories(
  page?: number,
  limit?: number,
  search_text: string = '',
) {
  const query = `?page=${page}&limit=${limit}&search_text=${search_text}`;
  return await customFetch<IResponseWithTotal<CategoryData[]>>(
    `/categories${query}`,
    {
      method: 'GET',
      next: {
        tags: ['categories-data'],
      },
    },
  );
}
export async function updateCategory(id: number, payload: CategoryPayload) {
  const param = `/${id}`;
  const res = await customFetchWithToken<CategoryData>(`/categories${param}`, {
    method: 'PATCH',
    body: JSON.stringify(payload),
  });
  if (res.success) {
    revalidateTag('categories-data');
    revalidateTag('category-' + id);
  }
  return res;
}
export async function deleteById(id: number) {
  const param = `/${id}`;
  const res = await customFetchWithToken<CategoryData>(`/categories${param}`, {
    method: 'DELETE',
  });
  if (res.success) {
    revalidateTag('categories-data');
  }
  return res;
}

export async function createCategory(payload: CategoryPayload) {
  const res = await customFetchWithToken<CategoryData>(`/categories`, {
    method: 'POST',
    body: JSON.stringify(payload),
  });

  if (res.success) {
    revalidateTag('categories-data');
  }
  return res;
}
