import Seo from '@/shared/layouts-components/seo/seo';
import React from 'react';
import StoreList from './StoreList';
import { getAllStores } from '@/services/store.service';
import Breadcrumb from './Breadcrumb';

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
