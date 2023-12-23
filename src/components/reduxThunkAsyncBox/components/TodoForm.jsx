import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAsyncTodos } from "../Features/Todos/todoSlice";

export default function TodoForm() {
  const [title, setTitle] = useState("");
  // handle Redux
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.todos);
  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) dispatch(addAsyncTodos({ title }));
    setTitle("");
  };
  return (
    <div className="md:w-1/2 border border-slate-400 p-2 rounded-lg">
      <h2 className="font-bold text-lg text-center py-2">Add new note</h2>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className={`formBox flex flex-col gap-1  ${
          loading ? "opacity-50" : "opacity-100"
        }`}
      >
        <label htmlFor="Title" className="flex flex-col font-bold  px-1 ">
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
        <div className="cursor-pointer flex items-center justify-center py-2">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-green-600 px-2 py-1 rounded-lg w-28 text-center font-bold text-white hover:outline-none"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}
