import { LIMIT_DEFAULT } from '@/constants/variants';

export const makeFilterData = (searchParams: { [key: string]: string }) => {
  const page = Number(searchParams?.page || 1);
  const limit = Number(searchParams?.limit || LIMIT_DEFAULT);
  const search_text = searchParams?.search_text || '';
  const categories =
    searchParams?.categories?.split(',').map((i) => Number(i)) || [];
  const stores = searchParams?.stores?.split(',').map((i) => Number(i)) || [];
  const topics = searchParams?.topics?.split(',').map((i) => Number(i)) || [];
  const status = searchParams?.status?.split(',').map((i) => Number(i)) || [];
  const rating = Number(searchParams?.rating || 5);
  return {
    categories,
    stores,
    status,
    search_text,
    page,
    rating,
    topics,
    limit,
  };
};
