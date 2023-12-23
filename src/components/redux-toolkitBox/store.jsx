import { configureStore } from "@reduxjs/toolkit";
import milkSlice from "./Features/Milk/milkSlice";
import cakeSlice from "./Features/Cake/cakeSlice";
import userSlice from "./Features/User/userSlice";
// import counterSlice from "./Features/Counter/counterSlice";
//ex : we can rename cakeSlice to cakeReducer,...
const store = configureStore({
  reducer: {
    cake: cakeSlice,
    milk: milkSlice,
    users: userSlice,
    // counter: counterSlice,
  },
});
export default store;
