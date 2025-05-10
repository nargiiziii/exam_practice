import { configureStore } from '@reduxjs/toolkit'
import productSlice  from '../features/productSlice'
import { basketSlice } from '../features/basketSlice'

export const store = configureStore({
  reducer: {
    products: productSlice,
    basket: basketSlice
  },
})