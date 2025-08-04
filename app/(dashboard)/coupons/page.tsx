import React, { Suspense } from 'react';
import CouponList from './CouponList';
import { filterCoupon } from '@/services/coupon.service';
import { makeFilterData } from '@/helper/filter';
import CustomLoading from '@/shared/layouts-components/custom-loading/CustomLoading';

export default async function CouponPage(props: {
  searchParams?: Promise<Record<string, string>>;
}) {
  const searchParams = await props.searchParams;
  const params = makeFilterData(searchParams || {});
  const res = await filterCoupon({
    ...params,
    is_verified: true,
  });

  return (
    <Suspense fallback={<CustomLoading />}>
      <CouponList
        data={res.data?.results ?? []}
        total={res.data?.total ?? 0}
        currentPage={params.page}
      />
    </Suspense>
  );
}
