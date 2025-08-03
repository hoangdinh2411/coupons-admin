import { ImageType } from '@/shared/layouts-components/uploadFile/UploadFile';
import { MetaData } from './share.type';

export interface TopicPayload {
  name: string;
  image: ImageType;
  meta_data?: MetaData;
  description: string;
}

export interface TopicData extends TopicPayload {
  id: number;
  slug: string;
}
