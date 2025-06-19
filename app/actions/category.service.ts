'use server';
import { CategoryData, CategoryPayload } from '@/types/category.type';
import customFetch from './api';
import { revalidateTag } from 'next/cache';
import { IResponseWithTotal } from '@/types/request.type';

export async function searchCategory(text: string) {
  return await customFetch<CategoryData>(`/categories/search?name=${text}`, {
    method: 'GET',
  });
}
export async function getCategories(
  page: number = 1,
  limit: number = 20,
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
  const res = await customFetch<CategoryData>(`/categories${param}`, {
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
  const res = await customFetch<CategoryData>(`/categories${param}`, {
    method: 'DELETE',
  });
  if (res.success) {
    revalidateTag('categories-data');
  }
  return res;
}

export async function createCategory(payload: CategoryPayload) {
  const res = await customFetch<CategoryData>(`/categories`, {
    method: 'POST',
    body: JSON.stringify(payload),
  });

  if (res.success) {
    revalidateTag('categories-data');
  }
  return res;
}
