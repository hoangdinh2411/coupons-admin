import { ImageType } from '@/shared/layouts-components/uploadFile/UploadFile';
import { MetaData } from './share.type';
import { FAQItem } from '@/shared/layouts-components/faqs/AccordionFAQ';
import { FAQsData } from './store.type';

export interface CategoryPayload {
  name: string;
  image: ImageType;
  meta_data: MetaData;
  description: string;
  faqs?: FAQItem[];
  about: string;
}

export interface CategoryData {
  id: number;
  slug: string;
  name: string;
  image: ImageType;
  meta_data: MetaData;
  description: string;
  faqs: FAQsData[];
  about: string;
}
