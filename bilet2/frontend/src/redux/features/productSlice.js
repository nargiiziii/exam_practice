import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost:3000/api/products2";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await axios.get(baseUrl);
    let prodData = response.data;
    return prodData;
  }
);

export const addProducts = createAsyncThunk(
  "products/addProducts",
  async (product) => {
    const response = await axios.post(baseUrl, product);
    let prodData = response.data;
    return prodData;
  }
);

export const deleteProducts = createAsyncThunk(
  "products/deleteProducts",
  async (id) => {
    await axios.delete(`${baseUrl}/${id}`);
    return id;
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [],
  },
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.allProducts = action.payload;
      })
      .addCase(addProducts.fulfilled, (state, action) => {
        state.allProducts.push(action.payload);
      })
      .addCase(deleteProducts.fulfilled, (state, action) => {
        state.allProducts = state.allProducts.filter(
          (prod) => prod._id != action.payload
        );
      });
  },
});

export const { incrementByAmount } = productSlice.actions;

export default productSlice.reducer;
