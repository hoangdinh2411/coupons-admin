import React from 'react';
import BlogList from './BlogList';
import { filterCoupon } from '@/services/coupon.service';
import { makeFilterData } from '@/helper/filter';
import { filterBlog } from '@/services/blog';

export default async function PostManagementPage(props: {
  searchParams?: Promise<Record<string, string>>;
}) {
  const searchParams = await props.searchParams;
  const { topics, page, search_text, rating } = makeFilterData(
    searchParams || {},
  );
  const res = await filterBlog({
    topics,
    page,
    search_text,
    rating,
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
