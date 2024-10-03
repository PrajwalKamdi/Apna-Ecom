import { configureStore } from "@reduxjs/toolkit";
import HomeItemSlice from "./HomeItemSlice";
import cartSlice from "./CartSlice";

const store =configureStore({
    reducer:{
        HomeItemSlice : HomeItemSlice.reducer,
        cartSlice : cartSlice.reducer
    }
})
export default store;