import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

// get todos
export const getAsyncTodos = createAsyncThunk(
  "todos/getAsyncTodos",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await API.get("/todos");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// add todos
export const addAsyncTodos = createAsyncThunk(
  "todos/addAsyncTodos",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await API.post("/todos", {
        title: payload.title,
        id: Date.now(),
        completed: false,
      });
      return data;
      // data means => action.payload
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// delete todos
export const deleteAsyncTodos = createAsyncThunk(
  "todos/deleteAsyncTodos",
  async (payload, { rejectWithValue }) => {
    try {
      await API.delete(`/todos/${payload.id}`);
      return { id: payload.id };
      // delete don't need return but if you can update your UI, you should return id of todo
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// toggle todos
export const toggleAsyncTodos = createAsyncThunk(
  "todos/toggleAsyncTodos",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await API.patch(`/todos/${payload.id}`, {
        completed: payload.completed,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    loading: false,
    todos: [],
    error: "",
  },
  reducers: {
    addTodos: (state, action) => {
      const newTodo = {
        title: action.payload.title,
        id: Date.now(),
        completed: false,
      };
      state.todos.push(newTodo);
    },
    toggleTodos: (state, action) => {
      const selectedTodo = state.todos.find(
        (todo) => todo.id === Number(action.payload.id)
      );
      selectedTodo.completed = !selectedTodo.completed;
    },
    deleteTodos: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    // get todos
    //   when you get you should using all state og get data (pending,success,error)
    builder.addCase(getAsyncTodos.pending, (state, action) => {
      state.loading = true;
      state.todos = [];
      state.error = "";
    });
    builder.addCase(getAsyncTodos.fulfilled, (state, action) => {
      state.loading = false;
      state.todos = action.payload;
      state.error = "";
    });
    builder.addCase(getAsyncTodos.rejected, (state, action) => {
      state.loading = false;
      state.todos = [];
      state.error = action.payload;
    });
    // add todos
    builder.addCase(addAsyncTodos.fulfilled, (state, action) => {
      state.loading = false;
      // push new todo tocan see them in the list of todos
      state.todos.push(action.payload);
      state.error = "";
    });
    // delete todos
    builder.addCase(deleteAsyncTodos.fulfilled, (state, action) => {
      state.loading = false;
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
      state.error = "";
    });
    // toggle todos
    builder.addCase(toggleAsyncTodos.fulfilled, (state, action) => {
      state.loading = false;
      const selected = state.todos.find((todo) => todo.id == action.payload.id);
      // this line is just used to updated UI
      selected.completed = action.payload.completed;
      state.error = "";
    });
  },
});

export const { addTodos, toggleTodos, deleteTodos } = todoSlice.actions;
export default todoSlice.reducer;
