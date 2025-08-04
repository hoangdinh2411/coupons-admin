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
  const params = makeFilterData(searchParams || {});
  const res = await filterStore(params);

  return (
    <Suspense fallback={<CustomLoading />}>
      {res.data && (
        <StoreList
          data={res.data?.results ?? []}
          total={res.data?.total ?? 0}
          currentPage={params.page}
        />
      )}
    </Suspense>
  );
}
