import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  allBasket: [],
}

export const basketSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
  addBasket:(state, action) => {
    let findProduct = allBasket.map((product) => product.id == action.payload.id)
  }
    
  },

})

export const {  addBasket } = basketSlice.actions

export default basketSlice.reducer