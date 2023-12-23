import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/Todo/todoSlice";

export default function AddTodoForm() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) dispatch(addTodo({ title }));
    setTitle("");
  };
  return (
    <div className="md:w-1/2 border border-slate-400 p-2 rounded-lg">
      <h2 className="font-bold text-lg text-center py-2">Add new note</h2>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="formBox flex flex-col gap-1"
      >
        <label htmlFor="Title" className="flex flex-col font-bold px-1">
          Todo Title
        </label>
        <input
          className="px-2 py-1 outline-none rounded-lg bg-white dark:bg-slate-600 border border-gray-400"
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add todo..."
        />
        <div className="flex items-center justify-center py-2">
          <button
            onClick={handleSubmit}
            className="bg-green-600 px-2 py-1 rounded-lg w-28 cursor-pointer text-center font-bold text-white hover:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
