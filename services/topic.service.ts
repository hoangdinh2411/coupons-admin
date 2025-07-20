'use server';
import { revalidateTag } from 'next/cache';
import { IResponseWithTotal } from '@/types/share.type';
import customFetch from './customFetch';
import { TopicData, TopicPayload } from '@/types/topic.type';

export async function getTopics(page?: number, search_text: string = '') {
  const query = `?page=${page}&search_text=${search_text}`;
  return await customFetch<IResponseWithTotal<TopicData[]>>(`/topic${query}`, {
    method: 'GET',
    next: {
      tags: ['topic-data'],
    },
  });
}
export async function updateTopic(id: number, payload: TopicPayload) {
  const res = await customFetch<TopicData>(`/topic/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  if (res.success) {
    revalidateTag('topic-data');
  }
  return res;
}
export async function deleteById(id: number) {
  const res = await customFetch<TopicData>(`/topic/${id}`, {
    method: 'DELETE',
  });
  if (res.success) {
    revalidateTag('topic-data');
  }
  return res;
}

export async function createTopic(payload: TopicPayload) {
  const res = await customFetch<TopicData>(`/topic`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (res.success) {
    revalidateTag('topic-data');
  }
  return res;
}
