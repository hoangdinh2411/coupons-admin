import { UserData } from './auth.type';
import { CategoryData } from './category.type';
import { CouponType } from './enum';
import { MetaData, TimestampedEntity } from './share.type';
import { StoreData } from './store.type';

export interface CouponPayload {
  title?: string;
  code?: string;
  offer_detail?: string;
  store_id?: number;
  categories?: number[];
  is_exclusive?: boolean;
  expire_date?: string | null;
  start_date?: string;
  type?: CouponType;
  rating?: number;
  offer_link?: string;
  discount?: number;
}

export interface CouponData extends TimestampedEntity {
  title: string;
  code: string;
  offer_detail: string;
  offer_link: string;
  is_exclusive: boolean;
  expire_date: string;
  start_date: string;
  type: CouponType;
  rating: number;
  id: number;
  store?: StoreData;
  categories?: CategoryData[];
  // meta_data?: MetaData;
  added_by: number;
  user?: UserData;
  discount: number;
}
