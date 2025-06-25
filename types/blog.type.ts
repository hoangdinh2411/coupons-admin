import { RawDraftContentState } from 'draft-js';
import { CategoryData } from './category.type';
import { MetaData, SeoData, TimestampedEntity } from './share.type';

export interface BlogPayload extends SeoData {
  title?: string;
  content?: RawDraftContentState;
  keywords?: string[];
  category_id?: number;
  rating?: number;
  image_bytes?: string;
}
export interface BlogData extends TimestampedEntity, SeoData {
  title: string;
  content: RawDraftContentState;
  keywords: string[];
  category_id: number;
  id: number;
  slug: string;
  category?: CategoryData;
  meta_data?: MetaData;
  rating: number;
  image_bytes: string;
  is_published: boolean;
  is_indexed: boolean;
}
