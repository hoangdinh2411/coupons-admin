'use server';
import { revalidatePath, revalidateTag } from 'next/cache';
import { IResponseWithTotal } from '@/types/share.type';
import customFetch from './customFetch';
import { LIMIT_DEFAULT } from '@/constants/variants';
import { PageData, PagePayload } from '@/types/page.type';

export async function getAllPages(page?: number, search_text?: string) {
  const params = new URLSearchParams();
  if (page) {
    params.append('page', page.toString());
    params.append('limit', LIMIT_DEFAULT.toString());
  }
  if (search_text) {
    params.append('search_text', search_text);
  }
  return await customFetch<IResponseWithTotal<PageData[]>>(
    `/pages?${params.toString()}`,
    {
      method: 'GET',
      next: {
        tags: ['dynamic-pages-data'],
      },
    },
  );
}

export async function getPageById(id: string) {
  return await customFetch<PageData>(`/pages/${id}`, {
    method: 'GET',
    cache: 'force-cache',
  });
}
export async function updatePage(id: number, payload: PagePayload) {
  const res = await customFetch<PageData>(`/pages/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  if (res.success) {
    revalidateTag('dynamic-pages-data');
    revalidatePath(`/dynamic-pages/update/${id}`);
  }
  return res;
}
export async function deletePageById(id: number) {
  const res = await customFetch<PageData>(`/pages/${id}`, {
    method: 'DELETE',
  });
  if (res.success) {
    revalidateTag('dynamic-pages-data');
    revalidatePath(`/dynamic-pages/update/${id}`);
  }
  return res;
}

export async function createPage(payload: PagePayload) {
  const res = await customFetch<PageData>(`/pages`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (res.success) {
    revalidateTag('dynamic-pages-data');
  }
  return res;
}
