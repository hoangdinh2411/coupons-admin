import { ImageType } from '@/shared/layouts-components/uploadFile/UploadFile';
import { MetaData } from './share.type';
import { FAQItem } from '@/shared/layouts-components/faqs/AccordionFAQ';
import { FAQsData } from './store.type';

export interface PagePayload {
  name: string;
  image: ImageType;
  meta_data: MetaData;
  description: string;
  faqs?: FAQItem[];
  about: string;
}

export interface PageData {
  id: number;
  slug: string;
  name: string;
  image: ImageType;
  meta_data: MetaData;
  description: string;
  faqs: FAQsData[];
  about: string;
}
