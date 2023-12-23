import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { Provider } from "react-redux";
import store from "./Features/store";
import HeaderContent from "../HeaderContent";

export default function HandleByReduxAsync() {
  return (
    <div className="p-2 h-screen">
      <HeaderContent />
      <div className="py-2 flex flex-col md:flex-row justify-evenly gap-3">
        <Provider store={store}>
          <TodoForm />
          <TodoList />
        </Provider>
      </div>
    </div>
  );
}
