import Seo from '@/shared/layouts-components/seo/seo';
import React from 'react';
import StoreList from './StoreList';
import { getAllStores } from '@/app/actions/store.service';

export default async function StorePage(props: {
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
  const res = await getAllStores(page, limit, search_text);
  if (!res.success || (res.success && !res.data)) {
    return { message: res.message };
  }
  return (
    <>
      <Seo title="Ecommerce - STORE" />
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
