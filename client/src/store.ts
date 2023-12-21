import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import ProductSlice from './features/products/toolKit/ProductSlice';
import CategorySlice from './features/categories/toolKit/CategorySlice';
import CartSlice from './features/cart/toolKit/CartSlice';

const store = configureStore({
  reducer: {
    product: ProductSlice,
    category: CategorySlice,
    cart: CartSlice,
  },
});
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;
export default store;
