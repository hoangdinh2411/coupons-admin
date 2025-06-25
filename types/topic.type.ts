import { MetaData, SeoData } from './share.type';

export interface TopicPayload {
  name: string;
  image_bytes: string;
}

export interface TopicData extends TopicPayload, SeoData {
  id: number;
  slug: string;
  meta_data?: MetaData;
}
