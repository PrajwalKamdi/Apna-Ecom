import { createSlice } from "@reduxjs/toolkit";

const HomeItemSlice = createSlice({
  name: "HomeItemSlice",
  initialState:0,
  reducers:{
    setInitialState:(state,action)=>{
        return state=action.payload;
    }
  }
});
export const {setInitialState} = HomeItemSlice.actions
export default HomeItemSlice;
