import Seo from '@/shared/layouts-components/seo/seo';
import React from 'react';
import CouponList from './CouponList';
import { filterCoupon } from '@/services/coupon.service';
import { makeFilterData } from '@/helper/filter';

export default async function CouponPage(props: {
  searchParams?: Promise<Record<string, string>>;
}) {
  const searchParams = await props.searchParams;
  const page = Number(searchParams?.page || 1);
  const data = makeFilterData(searchParams || {});
  const res = await filterCoupon({
    ...data,
    is_verified: true,
  });
  if (!res.success || (res.success && !res.data)) {
    return res.message;
  }
  return (
    <>
      <Seo title="Coupon management" />
      {res.data && (
        <CouponList
          data={res.data?.results}
          total={res.data?.total}
          currentPage={page}
        />
      )}
      {/* <UpdateStoreModal
        item={updateStore.item}
        open={updateStore.isOpen}
        onClose={handleCloseUpdateStore}
      /> */}
    </>
  );
}
