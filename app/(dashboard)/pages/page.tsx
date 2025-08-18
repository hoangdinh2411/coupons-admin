import { makeFilterData } from '@/helper/filter';
import { Suspense } from 'react';
import CustomLoading from '@/shared/layouts-components/custom-loading/CustomLoading';
import PageList from './PageList';

export default async function DynamicPagesPage(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
    search_text?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const { search_text, page } = makeFilterData(searchParams || {});
  return (
    <Suspense fallback={<CustomLoading />}>
      <PageList
        data={[]}
        total={0}
        currentPage={page}
      />
    </Suspense>
  );
}
