import Seo from '@/shared/layouts-components/seo/seo';
import React from 'react';
import CouponList from './CouponList';
import { getAllCoupons } from '@/app/services/coupon.service';

export default async function CouponPage(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
    search_text?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const limit = 20;
  const page = Number(searchParams?.page || 1);
  const search_text = searchParams?.search_text || '';
  const res = await getAllCoupons(page, limit, search_text);
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
