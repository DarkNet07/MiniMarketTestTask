/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type ProductState from './State';
import * as api from '../API/api';

const initialState: ProductState = {
  ProductsList: [],
  AllProducts: [],
};

export const loadAllProducts = createAsyncThunk('products/loadAll', (id: number) =>
  api.fetchLoadAllProducts(id),
);

export const loadProducts = createAsyncThunk(
  'products/load',
  async ({
    id,
    page,
    pageSize,
    sortBy,
    sortOrder,
  }: {
    id: number;
    page: number;
    pageSize: number;
    sortBy: string | null;
    sortOrder: 'ASC' | 'DESC';
  }) => api.fetchLoadProducts(id, page, pageSize, sortBy, sortOrder),
);

const ProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadProducts.fulfilled, (state, action) => {
      state.ProductsList = action.payload;
    });
    builder.addCase(loadAllProducts.fulfilled, (state, action) => {
      state.AllProducts = action.payload;
    });
  },
});
export default ProductSlice.reducer;
