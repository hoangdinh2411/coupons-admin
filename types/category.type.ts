import { CategoryFormData } from '@/app/(dashboard)/categories/CreateCategoryModal';

export interface CategoryData extends Pick<CategoryFormData, 'name'> {
  id: number;
  slug: string;
  image_bytes: string;
}
