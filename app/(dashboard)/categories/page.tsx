import { makeFilterData } from '@/helper/filter';
import { getCategories } from '../../../services/category.service';
import CategoryList from './CategoryList';

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
    <>
      {res.data && (
        <CategoryList
          data={res.data?.results}
          total={res.data?.total}
          currentPage={page}
        />
      )}
    </>
  );
}
