import React, { Suspense } from 'react';
import { filterCoupon } from '@/services/coupon.service';
import CouponSubmitList from './CouponSubmitList';
import { makeFilterData } from '@/helper/filter';
import CustomLoading from '@/shared/layouts-components/custom-loading/CustomLoading';

export default async function CouponPage(props: {
  searchParams?: Promise<Record<string, string>>;
}) {
  const searchParams = await props.searchParams;
  const page = Number(searchParams?.page || 1);
  const data = makeFilterData(searchParams || {});
  const res = await filterCoupon({
    ...data,
    is_verified: false,
  });
  if (!res.success || (res.success && !res.data)) {
    return res.message;
  }
  return (
    <Suspense fallback={<CustomLoading />}>
      <CouponSubmitList
        data={res.data?.results ?? []}
        total={res.data?.total ?? 0}
        currentPage={page}
      />
    </Suspense>
  );
}
