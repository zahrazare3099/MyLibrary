import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./Todos/todoSlice";

const store = configureStore({ reducer: { todos: todoSlice } });
export default store;
