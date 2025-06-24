import { RawDraftContentState } from 'draft-js';
import { CategoryData } from './category.type';
import { MetaData, TimestampedEntity } from './share.type';

export interface BlogPayload {
  title: string;
  content?: RawDraftContentState;
  keywords?: string[];
  category_id?: number;
  rating?: number;
}
export interface BlogData extends TimestampedEntity {
  title: string;
  content: RawDraftContentState;
  keywords: string[];
  category_id: number;
  id: number;
  slug: string;
  category?: CategoryData;
  meta_data?: MetaData;
  rating: number;
}
