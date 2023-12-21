/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type CartState from './State';

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{ productName: string; productId: number; quantity: number }>,
    ) => {
      const { productName, productId, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.productId === productId);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ productName, productId, quantity });
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
