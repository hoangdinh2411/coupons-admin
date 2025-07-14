import React, { Suspense } from 'react';
import StoreList from './StoreList';
import { filterStore } from '@/services/store.service';
import { makeFilterData } from '@/helper/filter';
import CustomLoading from '@/shared/layouts-components/custom-loading/CustomLoading';

export default async function StorePage(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
    search_text?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const { categories, rating, search_text, page, limit } = makeFilterData(
    searchParams || {},
  );
  const res = await filterStore({ categories, rating, search_text, page, limit });
  if (!res.success || (res.success && !res.data)) {
    return res.message;
  }
  return (
    <Suspense fallback={<CustomLoading />}>
      {res.data && (
        <StoreList
          data={res.data?.results}
          total={res.data?.total}
          currentPage={page}
        />
      )}
    </Suspense>
  );
}
