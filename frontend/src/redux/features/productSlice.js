import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";

const baseUrl = "http://localhost:4000/api/products"

export const getProducts = createAsyncThunk( 'products', async () => {
      let response = await axios.get(baseUrl)
      let prodData = response.data;
      return prodData
    },
  )

const initialState = {
  allProducts: [],
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
     state.allProducts = action.payload;
    })
  },
})

export const {  } = productSlice.actions

export default productSlice.reducer