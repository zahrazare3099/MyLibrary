import { createSlice } from "@reduxjs/toolkit";

const milkSlice = createSlice({
  name: "milk",
  initialState: { numOfMilkButtel: 20 },
  reducers: {
    buyMilk: (state) => {
      --state.numOfMilkButtel;
    },
  },
});
export const { buyMilk } = milkSlice.actions;
export default milkSlice.reducer;
