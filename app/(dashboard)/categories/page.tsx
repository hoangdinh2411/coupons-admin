import { makeFilterData } from '@/helper/filter';
import { getCategories } from '../../../services/category.service';
import CategoryList from './CategoryList';
import { Suspense } from 'react';
import CustomLoading from '@/shared/layouts-components/custom-loading/CustomLoading';

export default async function CategoryPage(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
    search_text?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const limit = 20;
  const { search_text, page } = makeFilterData(searchParams || {});
  const res = await getCategories(page, limit, search_text);
  if (!res.success || (res.success && !res.data)) {
    return { message: res.message };
  }
  return (
    <Suspense fallback={<CustomLoading />}>
      <CategoryList
        data={res.data?.results ?? []}
        total={res.data?.total ?? 0}
        currentPage={page}
      />
    </Suspense>
  );
}
