'use server';
import { revalidatePath, revalidateTag } from 'next/cache';
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
        tags: [data.is_verified ? 'coupons-data' : 'submit-coupons-data'],
      },
    },
  );
}

export async function getCouponsById(id: string) {
  return await customFetch<CouponData>(`/coupons/${id}`, {
    method: 'GET',
    cache: 'force-cache',
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
    revalidateTag('submit-coupons-data');
    revalidatePath(`coupon/${id}`);
  }
  return res;
}
export async function deleteCouponById(id: number) {
  const res = await customFetch<CouponData>(`/coupons/${id}`, {
    method: 'DELETE',
  });
  if (res.success) {
    revalidateTag('coupons-data');
    revalidateTag('submit-coupons-data');
    revalidatePath(`coupon/${id}`);
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
    revalidateTag('submit-coupons-data');
    revalidatePath(`coupon/${id}`);
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
    revalidateTag('submit-coupons-data');
  }
  return res;
}
