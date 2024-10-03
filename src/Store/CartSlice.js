import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: [],
  reducers: {
    addItemToCart: (state, action) => {
      state.push(action.payload);
    },
    removeFromCart: (state, action) => {
      return state.filter((item)=>item.id !=action.payload.id);
    },
  },
});
export const cartAction = cartSlice.actions;
export default cartSlice;
