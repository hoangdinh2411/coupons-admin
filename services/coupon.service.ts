'use server';
import { revalidateTag } from 'next/cache';
import { IResponseWithTotal } from '@/types/share.type';
import customFetch from './customFetch';
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
      next: {
        tags: ['coupons-data'],
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
  const res = await customFetch<CouponData>(`/coupons/${id}`, {
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
  const res = await customFetch<CouponData>(`/coupons/${id}`, {
    method: 'DELETE',
  });
  if (res.success) {
    revalidateTag('coupons-data');
    revalidateTag('coupons-submit-data');
  }
  return res;
}
export async function submitCouponById(id: number) {
  const res = await customFetch<CouponData>(`/coupons/submit/${id}`, {
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
  const res = await customFetch<CouponData>(`/coupons`, {
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
