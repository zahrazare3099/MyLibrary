import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleTodo } from "../features/Todo/todoSlice";
import { TrashIcon } from "@heroicons/react/24/outline";

export default function TodoList() {
  const { todos } = useSelector((state) => state.todos);

  return (
    <div className="flex flex-col items-center md:w-1/2 border border-slate-400 p-2 rounded-lg">
      <h3 className="text-center font-bold flex">
        TodoList <p className="px-1 text-teal-500">(sync)</p>
      </h3>
      <ul className="flex flex-col pt-4 gap-1">
        {todos.length ? (
          todos.map((item) => {
            return <Todo {...item} key={item.id} />;
          })
        ) : (
          <div className="border border-slate-400 text-slate-400 mb-2 py-1 px-2 rounded-lg">
            Dosen't have any Todos yet!
          </div>
        )}
      </ul>
    </div>
  );
}

function Todo({ title, id, completed }) {
  const dispatch = useDispatch();
  return (
    <li
      className={`p-1 flex items-center w-64 rounded-lg bg-neutral-100 dark:bg-slate-400 border border-slate-400 ${
        completed && "border-teal-700"
      } `}
    >
      <div className="flex grow gap-1 p-1">
        <span className="flex ">
          <input
            className="text-indigo-600 border-gray-300 form-checkbox"
            onChange={(e) => {
              dispatch(toggleTodo({ id }));
            }}
            checked={completed}
            type="checkbox"
          />
        </span>
        <span
          className={`font-semibold  ${
            completed && "text-teal-700 line-through"
          }`}
        >
          {title}
        </span>
      </div>
      <TrashIcon
        onClick={() => {
          dispatch(deleteTodo({ id }));
        }}
        className="h-7 w-7 text-red-600 bg-transparent hover:bg-red-600 hover:text-white rounded-lg p-1"
      />
    </li>
  );
}
