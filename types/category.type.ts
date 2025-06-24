import { MetaData, SeoData } from './share.type';

export interface CategoryPayload {
  name: string;
  image_bytes: string;
}

export interface CategoryData extends CategoryPayload, SeoData {
  id: number;
  slug: string;
  meta_data?: MetaData;
}
