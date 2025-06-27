import React, { Suspense } from 'react';
import BlogList from './BlogList';
import { makeFilterData } from '@/helper/filter';
import { filterBlog } from '@/services/blog';
import CustomLoading from '@/shared/layouts-components/custom-loading/CustomLoading';

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
    <Suspense fallback={<CustomLoading />}>
      {res.data && (
        <BlogList
          data={res.data?.results}
          total={res.data?.total}
          currentPage={page}
        />
      )}
    </Suspense>
  );
}
