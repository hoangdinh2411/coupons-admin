import { ImageType } from '@/shared/layouts-components/uploadFile/UploadFile';
import { CategoryData } from './category.type';
import { MetaData, TimestampedEntity } from './share.type';

export interface StorePayload {
  name?: string;
  description?: string;
  image?: ImageType;
  max_discount_pct?: number;
  keywords?: string[];
  url?: string;
  category_id?: number;
  rating?: number;
  meta_data?: MetaData;
}
export interface StoreData extends TimestampedEntity {
  name: string;
  description: string;
  max_discount_pct: number;
  keywords: string[];
  url: string;
  id: number;
  slug: string;
  image?: ImageType;
  category_id: number;
  category?: CategoryData;
  coupons: [];
  meta_data?: MetaData;
  rating: number;
}
