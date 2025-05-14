import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost:3000/api/products3";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await axios.get(baseUrl);
    return response.data;
  }
);

const initialState = {
  allProducts: [],
};

export const productSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.allProducts = action.payload;
    });
  },
});

export const {} = productSlice.actions;

export default productSlice.reducer;
