import Seo from '@/shared/layouts-components/seo/seo';
import React from 'react';
import StoreList from './StoreList';
import { filterStore } from '@/services/store.service';
import { makeFilterData } from '@/helper/filter';

export default async function StorePage(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
    search_text?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const page = Number(searchParams?.page || 1);
  const { categories, rating, search_text } = makeFilterData(
    searchParams || {},
  );
  const res = await filterStore({ categories, rating, search_text, page });
  if (!res.success || (res.success && !res.data)) {
    return res.message;
  }
  return (
    <>
      <Seo title="Store management" />
      {res.data && (
        <StoreList
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
