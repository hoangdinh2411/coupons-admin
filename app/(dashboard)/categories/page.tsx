import { getCategories } from '../../actions/category.service';
import CategoryList from './CategoryList';
// import CategoryService from '@/lib/category.service';

export default async function CategoryPage(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const limit = 20;
  const page = Number(searchParams?.page || 1);
  const res = await getCategories(page, limit);
  if (!res.success || (res.success && !res.data)) {
    return { message: res.message };
  }
  return (
    <>
      {/* <Seo title=" Categories" /> */}
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
