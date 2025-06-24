import React from 'react';
import BlogList from './BlogList';
import { filterCoupon } from '@/services/coupon.service';
import { makeFilterData } from '@/helper/filter';
import { filterBlog } from '@/services/blog';

export default async function PostManagementPage(props: {
  searchParams?: Promise<Record<string, string>>;
}) {
  const searchParams = await props.searchParams;
  const { categories, page, search_text } = makeFilterData(searchParams || {});
  const res = await filterBlog({
    categories,
    page,
    search_text,
  });
  if (!res.success || (res.success && !res.data)) {
    return res.message;
  }
  return (
    <>
      {res.data && (
        <BlogList
          data={res.data?.results}
          total={res.data?.total}
          currentPage={page}
        />
      )}
    </>
  );
}
