'use server';
import customFetch from './customFetch';
import { revalidateTag } from 'next/cache';
import { IResponse, IResponseWithTotal } from '@/types/share.type';
import { StoreData, StorePayload } from '@/types/store.type';
import customFetchWithToken from './customFetchWithToken';
import { FilterPayload } from '@/types/filter.type';
import { BlogData, BlogPayload } from '@/types/blog.type';

export async function filterBlog(data: FilterPayload) {
  return await customFetch<IResponseWithTotal<BlogData[]>>(`/blogs/filter`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}
export async function getAllBlogs(
  page?: number,
  limit?: number,
  search_text: string = '',
) {
  const query = `?page=${page ?? ''}&limit=${limit ?? ''}&search_text=${search_text ?? ''}`;
  return await customFetch<IResponseWithTotal<BlogData[]>>(`/blogs${query}`, {
    method: 'GET',
    next: {
      tags: ['blogs-data'],
    },
  });
}
export async function getBlogBy(identity: string | number) {
  return await customFetch<BlogData>(`/blogs/${identity}`, {
    method: 'GET',
    next: {
      tags: [`store-${identity}`],
    },
  });
}
export async function updateBlog(id: number, payload: BlogPayload) {
  const res = await customFetchWithToken<BlogData>(`/blogs/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  if (res.success) {
    revalidateTag('blogs-data');
    revalidateTag('category-' + res.data?.slug);
  }
  return res;
}
export async function deleteBlogById(id: number) {
  const param = `/${id}`;
  const res = await customFetchWithToken<BlogData>(`/blogs${param}`, {
    method: 'DELETE',
  });
  if (res.success) {
    revalidateTag('blogs-data');
  }
  return res;
}

export async function createBlog(payload: BlogPayload) {
  const res = await customFetchWithToken<BlogData>(`/blogs`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (res.success) {
    revalidateTag('blogs-data');
  }
  return res;
}
