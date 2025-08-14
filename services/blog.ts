'use server';
import { revalidatePath, revalidateTag } from 'next/cache';
import { IResponseWithTotal } from '@/types/share.type';
import customFetch from './customFetch';
import { FilterPayload } from '@/types/filter.type';
import { BlogData, BlogPayload } from '@/types/blog.type';

export async function filterBlog(data: FilterPayload) {
  return await customFetch<IResponseWithTotal<BlogData[]>>(`/blogs/filter`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    next: {
      tags: ['filter-blogs'],
    },
  });
}
export async function getBlogBy(identity: string | number) {
  return await customFetch<BlogData>(`/blogs/${identity}`, {
    method: 'GET',
    cache: 'force-cache',
  });
}
export async function updateBlog(id: number, payload: BlogPayload) {
  const res = await customFetch<BlogData>(`/blogs/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  if (res.success) {
    revalidateTag('filter-blogs');
    revalidatePath(`blogs/${id}`);
  }
  return res;
}
export async function deleteBlogById(id: number) {
  const param = `/${id}`;
  const res = await customFetch<BlogData>(`/blogs${param}`, {
    method: 'DELETE',
  });
  if (res.success) {
    revalidateTag('filter-blogs');
    revalidatePath(`blogs/${id}`);
  }
  return res;
}

export async function createBlog(payload: BlogPayload) {
  const res = await customFetch<BlogData>(`/blogs`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (res.success) {
    revalidateTag('filter-blogs');
  }
  return res;
}
