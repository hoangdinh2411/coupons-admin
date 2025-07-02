'use server';
import { revalidateTag } from 'next/cache';
import { IResponseWithTotal } from '@/types/share.type';
import customFetchWithToken from './customFetchWithToken';
import { FilterPayload } from '@/types/filter.type';
import { BlogData, BlogPayload } from '@/types/blog.type';

export async function filterBlog(data: FilterPayload) {
  return await customFetchWithToken<IResponseWithTotal<BlogData[]>>(
    `/blogs/filter`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    },
  );
}
export async function getBlogBy(identity: string | number) {
  return await customFetchWithToken<BlogData>(`/blogs/${identity}`, {
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
