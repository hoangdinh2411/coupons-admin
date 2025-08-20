import React, { Suspense } from 'react';
import BlogList from './BlogList';
import { makeFilterData } from '@/helper/filter';
import { filterBlog } from '@/services/blog';
import CustomLoading from '@/shared/layouts-components/custom-loading/CustomLoading';

export default async function PostManagementPage(props: {
  searchParams?: Promise<Record<string, string>>;
}) {
  const searchParams = await props.searchParams;
  const params = makeFilterData(
    searchParams || {},
  );
  console.log(params)
  const res = await filterBlog(params);
  if (!res.success || (res.success && !res.data)) {
    return res.message;
  }
  return (
    <Suspense fallback={<CustomLoading />}>
      <BlogList
        data={res.data?.results ?? []}
        total={res.data?.total ?? 0}
        currentPage={params.page}
      />
    </Suspense>
  );
}
