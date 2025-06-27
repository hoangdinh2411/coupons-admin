import React, { Suspense } from 'react';
import CouponList from './CouponList';
import { filterCoupon } from '@/services/coupon.service';
import { makeFilterData } from '@/helper/filter';
import CustomLoading from '@/shared/layouts-components/custom-loading/CustomLoading';

export default async function CouponPage(props: {
  searchParams?: Promise<Record<string, string>>;
}) {
  const searchParams = await props.searchParams;
  const data = makeFilterData(searchParams || {});
  const res = await filterCoupon({
    ...data,
    is_verified: true,
  });
  if (!res.success || (res.success && !res.data)) {
    return res.message;
  }
  return (
    <Suspense fallback={<CustomLoading />}>
      {res.data && (
        <CouponList
          data={res.data?.results}
          total={res.data?.total}
          currentPage={data.page}
        />
      )}
    </Suspense>
  );
}
