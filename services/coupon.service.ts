'use server';
import customFetch from './customFetch';
import { revalidateTag } from 'next/cache';
import { IResponse, IResponseWithTotal } from '@/types/share.type';
import customFetchWithToken from './customFetchWithToken';
import { CouponData, CouponPayload } from '@/types/coupon.type';
import { FilterPayload } from '@/types/filter.type';

export async function filterCoupon(data: FilterPayload) {
  return await customFetch<IResponseWithTotal<CouponData[]>>(
    `/coupons/filter`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    },
  );
}
export async function getAllCoupons(
  page?: number,
  limit?: number,
  search_text: string = '',
) {
  const query = `?page=${page ?? ''}&limit=${limit ?? ''}&search_text=${search_text ?? ''}`;
  return await customFetch<IResponseWithTotal<CouponData[]>>(
    `/coupons${query}`,
    {
      method: 'GET',
      next: {
        tags: ['coupons-data'],
      },
    },
  );
}
export async function getUnverifiedCoupons(
  page?: number,
  limit?: number,
  search_text: string = '',
) {
  const query = `?page=${page ?? ''}&limit=${limit ?? ''}&search_text=${search_text ?? ''}`;
  return await customFetchWithToken<IResponseWithTotal<CouponData[]>>(
    `/coupons/submit${query}`,
    {
      method: 'GET',
      next: {
        tags: ['coupons-submit-data'],
      },
    },
  );
}
export async function getCouponsById(id: string) {
  return await customFetch<CouponData>(`/coupons/${id}`, {
    method: 'GET',
    next: {
      tags: [`coupon-${id}`],
    },
  });
}
export async function updateCoupon(id: number, payload: CouponPayload) {
  const res = await customFetchWithToken<CouponData>(`/coupons/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  if (res.success) {
    revalidateTag('coupons-data');
    revalidateTag('coupons-submit-data');
    revalidateTag(`coupon-${id}`);
  }
  return res;
}
export async function deleteCouponById(id: number) {
  const res = await customFetchWithToken<CouponData>(`/coupons/${id}`, {
    method: 'DELETE',
  });
  if (res.success) {
    revalidateTag('coupons-data');
    revalidateTag('coupons-submit-data');
  }
  return res;
}
export async function submitCouponById(id: number) {
  const res = await customFetchWithToken<CouponData>(`/coupons/submit/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (res.success) {
    revalidateTag('coupons-data');
    revalidateTag('coupons-submit-data');
    revalidateTag(`coupon-${id}`);
  }
  return res;
}

export async function createCoupon(payload: CouponPayload) {
  const res = await customFetchWithToken<CouponData>(`/coupons`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (res.success) {
    revalidateTag('coupons-data');
    revalidateTag('coupons-submit-data');
  }
  return res;
}
