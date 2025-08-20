import { makeFilterData } from '@/helper/filter';
import { Suspense } from 'react';
import CustomLoading from '@/shared/layouts-components/custom-loading/CustomLoading';
import PageList from './PageList';
import { getAllPages } from '@/services/page.service';
import { notFound } from 'next/navigation';

export default async function DynamicPagesPage(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
    search_text?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const { search_text, page } = makeFilterData(searchParams || {});
  const res = await getAllPages(page, search_text)
  if (!res.data) {
    notFound()
  }
  return (
    <Suspense fallback={<CustomLoading />}>
      <PageList data={res.data.results} total={res.data.total} currentPage={page} />
    </Suspense>
  );
}
