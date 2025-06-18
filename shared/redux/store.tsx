'use client';
import { configureStore } from '@reduxjs/toolkit';
import {
  buyCartReducer,
  buyNowReducer,
  cartReducer,
  productReducer,
  wishListReducer,
} from './action';
import { Provider } from 'react-redux';

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    wishList: wishListReducer,
    buyNow: buyNowReducer,
    buyCart: buyCartReducer,
  },
});

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
