import { ImageType } from '@/shared/layouts-components/uploadFile/UploadFile';
import { CategoryData } from './category.type';
import { MetaData, TimestampedEntity } from './share.type';
import { FAQItem } from '@/shared/layouts-components/faqs/AccordionFAQ';

export interface FAQsData {
  id: string;
  question: string;
  answer: string;
  order: number;
}

export interface StorePayload {
  name?: string;
  description?: string;
  image?: ImageType;
  max_discount_pct?: number;
  keywords?: string[];
  url?: string;
  categories?: number[];
  rating?: number;
  meta_data?: MetaData;
  slug?: string;
  faqs?: FAQItem[];
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
  categories?: CategoryData[];
  coupons: [];
  meta_data?: MetaData;
  rating: number;
  faqs: FAQsData[];
}
