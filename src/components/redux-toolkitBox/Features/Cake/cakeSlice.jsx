import { createSlice } from "@reduxjs/toolkit";

// createSlice => buildCreateSlice
const cakeSlice = createSlice({
  name: "cake",
  initialState: { numOfCake: 10 },
  reducers: {
    buyCake: (state, action) => {
      // mutate state => immer js
      state.numOfCake -= action.payload;
    },
  },
});
// action creator
export const { buyCake } = cakeSlice.actions;
// reducer
export default cakeSlice.reducer;
