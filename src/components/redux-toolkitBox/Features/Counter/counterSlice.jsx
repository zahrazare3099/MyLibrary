// import { createSlice } from "@reduxjs/toolkit";
// const counterSlice = createSlice({
//   name: "counter",
//   initialState: {
//     value: 0,
//   },
//   reducers: {
//     increment: (state) =>  state.value += 1,
//     decrement: (state) => state.value -= 1,
//   },
// });
// export const { increment, decrement } = counterSlice.actions;
// export default counterSlice.reducer;
/////////////////////////////////////////////////////////////////////

import { buildCreateSlice } from "@reduxjs/toolkit";

const counterSlice = buildCreateSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => (state.value += 1),
    decrement: (state) => (state.value -= 1),
  },
});
export const { useIncrementMutation, useDecrementMutation } = counterSlice;
// To access the action creators
const { actions } = counterSlice;
export const { increment, decrement } = actions;
