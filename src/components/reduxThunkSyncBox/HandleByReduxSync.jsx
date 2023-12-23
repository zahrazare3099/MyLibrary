import React from "react";
import { Provider } from "react-redux";
import store from "./features/store";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import HeaderContent from "../HeaderContent";

export default function HandleByReduxSync() {
  return (
    <div className="h-screen p-2 bg-slate-200 dark:bg-slate-800">
      <HeaderContent />
      <div className="py-2 flex flex-col md:flex-row justify-evenly gap-3">
        <Provider store={store}>
          <AddTodoForm />
          <TodoList />
        </Provider>
      </div>
    </div>
  );
}
