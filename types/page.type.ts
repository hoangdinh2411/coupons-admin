import { ImageType } from '@/shared/layouts-components/uploadFile/UploadFile';
import { MetaData } from './share.type';
import { FAQItem } from '@/shared/layouts-components/faqs/AccordionFAQ';

export interface PagePayload {
  type: string;
  content: string;
  images: ImageType[];
  thumbnail: ImageType;
  faqs?: FAQItem[];
  meta_data: MetaData;
  slug: string;
}

export interface PageData {
  id: string;
  type: string;
  content: string;
  images: ImageType[];
  thumbnail: ImageType;
  faqs?: FAQItem[];
  meta_data: MetaData;
  slug: string;
}
