import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allBasket: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addBasket: (state, action) => {
      let existProduct = state.allBasket.find(
        (product) => product._id == action.payload._id
      );

      if (!existProduct) {
        state.allBasket.push({ ...action.payload, count: 1 });
        console.log("added to basket");
      } else {
        existProduct.count += 1;
        console.log("added to basket(count + 1)");
      }
    },
    deleteBasket:(state, action) => {
        state.allBasket = state.allBasket.filter((prod) => prod._id != action.payload);
        console.log("deleted from basket");
    },
    increment:(state, action) => {
        let findProd = state.allBasket.find((prod)=> prod._id == action.payload);
        if(findProd){
            findProd.count += 1
            console.log("increment works");
        }
    },
    decrement:(state, action) => {
        let findProd = state.allBasket.find((prod)=> prod._id == action.payload);
        if(findProd){
           if(findProd.count > 1){
            findProd.count -= 1
            console.log("decrement works");
           } else {
            console.log("you can not decrement(there is 1)");
           }
        }
    },
  },
});

export const { addBasket, deleteBasket, increment, decrement } = basketSlice.actions;

export default basketSlice.reducer;
