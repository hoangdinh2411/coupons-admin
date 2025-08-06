'use server';
import { CategoryData, CategoryPayload } from '@/types/category.type';
import { revalidateTag } from 'next/cache';
import { IResponseWithTotal } from '@/types/share.type';
import customFetch from './customFetch';
import { LIMIT_DEFAULT } from '@/constants/variants';

export async function getCategories(page?: number, search_text: string = '') {
  const params = new URLSearchParams();
  if (page) {
    params.append('page', page.toString());
    params.append('limit', LIMIT_DEFAULT.toString());
  }
  if (search_text) {
    params.append('search_text', search_text);
  }
  return await customFetch<IResponseWithTotal<CategoryData[]>>(
    `/categories?${params.toString()}`,
    {
      method: 'GET',
      next: {
        tags: ['categories-data'],
      },
    },
  );
}
export async function updateCategory(id: number, payload: CategoryPayload) {
  const res = await customFetch<CategoryData>(`/categories/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  if (res.success) {
    revalidateTag('categories-data');
  }
  return res;
}
export async function deleteById(id: number) {
  const res = await customFetch<CategoryData>(`/categories/${id}`, {
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
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (res.success) {
    revalidateTag('categories-data');
  }
  return res;
}
