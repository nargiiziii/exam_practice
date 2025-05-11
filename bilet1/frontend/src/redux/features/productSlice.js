import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost:4000/api/products";

export const getProducts = createAsyncThunk("products/getProduct", async () => {
  let response = await axios.get(baseUrl);
  let prodData = response.data;
  return prodData;
});

export const addProducts = createAsyncThunk(
  "products/addProduct",
  async (product) => {
    let response = await axios.post(baseUrl, product);
    let prodData = response.data;
    return prodData;
  }
);

export const deleteProducts = createAsyncThunk(
  "products/deleteProduct",
  async (id) => {
    await axios.delete(`${baseUrl}/${id}`);
    return id;
  }
);

const initialState = {
  allProducts: [],
  filteredProducts: [], //for search
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    sortByLowToHigh: (state, action) => {
      state.allProducts = state.allProducts.sort((a, b) => a.price - b.price);
    },
    sortByHighToLow: (state, action) => {
      state.allProducts = state.allProducts.sort((a, b) => b.price - a.price);
    },
    searchProduct: (state, action)=> {
      state.allProducts = state.filteredProducts.filter((product) => product.title.toLowerCase().includes(action.payload.toLowerCase().trim()))
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.allProducts = action.payload;
        state.filteredProducts = action.payload; //for search
      })
      .addCase(addProducts.fulfilled, (state, action) => {
        state.allProducts.push(action.payload);
      })
      .addCase(deleteProducts.fulfilled, (state, action) => {
        state.allProducts = state.allProducts.filter(
          (prod) => prod._id !== action.payload
        );
      });
  },
});

export const { sortByLowToHigh, sortByHighToLow, searchProduct } = productSlice.actions;

export default productSlice.reducer;
