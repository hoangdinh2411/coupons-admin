export interface StorePayload {
  name: string;
  description: string;
  image_bytes: string;
  max_discount_pct: number;
  keywords: string[];
  url: string;
  category: number;
}
export interface StoreData extends StorePayload {
  id: number;
}
