/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../API/api';
import type CategoryState from './State';

const initialState: CategoryState = {
  CategoriesList: [],
};

export const loadAllCategories = createAsyncThunk('categories/load', () =>
  api.fetchLoadCaegories(),
);

const CategorySlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadAllCategories.fulfilled, (state, action) => {
      state.CategoriesList = action.payload;
    });
  },
});
export default CategorySlice.reducer;
