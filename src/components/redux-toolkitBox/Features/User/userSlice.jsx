import axios from "axios";
import {
  buildCreateSlice,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

// in getAsyncUser ro bayad export konim chon reducer nadararim
export const getAsyncUser = createAsyncThunk(
  "user/getAsyncUsers",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: { loading: false, data: [], error: "" },
  // extraReducers: {
  //   [getAsyncUser.pending]: (state, action) => {
  //     state.loading = true;
  //     state.data = [];
  //     state.error = "";
  //   },
  //   [getAsyncUser.fulfilled]: (state, action) => {
  //     state.loading = false;
  //     state.data = action.payload;
  //   },
  //   [getAsyncUser.rejected]: (state, action) => {
  //     state.loading = false;
  //     state.data = [];
  //     state.error = action.payload;
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(getAsyncUser.pending, (state, action) => {
        state.loading = true;
        state.data = [];
        state.error = "";
      })
      .addCase(getAsyncUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getAsyncUser.rejected, (state, action) => {
        state.loading = false;
        state.data = [];
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;

//  extraReducers: {
// success =>fullfild
// rejected
// pending
// }
