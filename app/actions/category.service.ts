'use server';
import { CategoryData } from '@/types/category.type';
import customFetch, { IResponseWithTotal } from './api';
import { CategoryFormData } from '@/app/(dashboard)/categories/CreateCategoryModal';
import { revalidateTag } from 'next/cache';

export async function getCategoryById(id: number) {
  const param = `/${id}`;
  return await customFetch<CategoryData>(`/categories${param}`, {
    method: 'GET',
    next: {
      tags: ['category-' + id],
    },
  });
}
export async function getCategories(page: number = 1, limit: number = 20) {
  const query = `?page=${page}&limit=${limit}`;
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
export async function updateCategory(id: number, payload: CategoryFormData) {
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

export async function createCategory(payload: CategoryFormData) {
  const res = await customFetch<CategoryData>(`/categories`, {
    method: 'POST',
    body: JSON.stringify(payload),
  });

  if (res.success) {
    revalidateTag('categories-data');
  }
  return res;
}
