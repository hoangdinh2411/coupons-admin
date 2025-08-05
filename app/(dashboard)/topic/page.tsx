import { makeFilterData } from '@/helper/filter';
import { getTopics } from '@/services/topic.service';
import TopicList from './TopicList';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import CustomLoading from '@/shared/layouts-components/custom-loading/CustomLoading';

export default async function TopicPage(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
    search_text?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const { search_text, page } = makeFilterData(searchParams || {});
  const res = await getTopics(page, search_text);

  return (
    <Suspense fallback={<CustomLoading />}>
      <TopicList
        data={res.data?.results ?? []}
        total={res.data?.total ?? 0}
        currentPage={page}
      />
    </Suspense>
  );
}
