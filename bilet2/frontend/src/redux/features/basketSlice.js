import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    allBasket: [],
  },
  reducers: {
    addBasket: (state, action) => {
      let existProduct = state.allBasket.find(
        (prod) => prod._id == action.payload._id
      );

      if (!existProduct) {
        state.allBasket.push({ ...action.payload, count: 1 });
        console.log("added to basket");
      } else {
        existProduct.count += 1;
        console.log("added to basket count +1");
      }
    },
    deleteBasket: (state, action) => {
      state.allBasket = state.allBasket.filter(
        (prod) => prod._id != action.payload
      );
    },
    increment: (state, action) => {
      let findProd = state.allBasket.find((prod) => prod._id == action.payload);
      if (findProd) {
        findProd.count += 1;
      }
    },
    decrement: (state, action) => {
      let findProd = state.allBasket.find((prod) => prod._id == action.payload);
      if (findProd) {
        if (findProd.count > 1) {
          findProd.count -= 1;
        } else {
          alert("there is one product, you cannot decrese!!");
        }
      }
    },
  },
});

export const { addBasket, deleteBasket, increment, decrement } = basketSlice.actions;

export default basketSlice.reducer;
