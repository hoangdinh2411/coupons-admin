import { CategoryData } from './category.type';
import { MetaData, SeoData, TimestampedEntity } from './share.type';

export interface StorePayload extends SeoData {
  name?: string;
  description?: string;
  image_bytes?: string;
  max_discount_pct?: number;
  keywords?: string[];
  url?: string;
  category_id?: number;
  rating?: number;
}
export interface StoreData extends TimestampedEntity, SeoData {
  name: string;
  description: string;
  image_bytes: string;
  max_discount_pct: number;
  keywords: string[];
  url: string;
  id: number;
  slug: string;
  category_id: number;
  category?: CategoryData;
  coupons: [];
  rating: number;
}
