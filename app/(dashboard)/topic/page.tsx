import { makeFilterData } from '@/helper/filter';
import { getTopics } from '@/services/topic.service';
import TopicList from './TopicList';
import { notFound } from 'next/navigation';

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
  if (!res.success || (res.success && !res.data)) {
    return { message: res.message };
  }
  if (!res.data) {
    return notFound();
  }
  return (
    <TopicList
      data={res.data?.results}
      total={res.data?.total}
      currentPage={page}
    />
  );
}
