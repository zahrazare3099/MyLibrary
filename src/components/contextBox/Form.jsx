import React, { useState } from "react";
import { useNotesDispatch } from "./NotesProvider";

export default function Form() {
  // useContext
  const { dispatch } = useNotesDispatch();
  // initialState
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      title,
      description,
      id: Date.now(),
      onCreated: new Date(),
      compeleted: false,
    };
    if (!title || !description) return;
    dispatch({ type: "add", payload: newNote });
    setTitle("");
    setDescription("");
  };
  return (
    <div className="md:w-1/2 border border-slate-400 p-2 rounded-lg">
      <h2 className="font-bold text-lg text-center py-2">Add new note</h2>
      <form
        className="formBox flex flex-col gap-2"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="flex flex-col px-2">
          <label htmlFor="Title" className="flex flex-col font-bold px-1">
            Todo Title
          </label>
          <input
            className="px-2 py-1 outline-none rounded-lg bg-white dark:bg-slate-600 border border-gray-400"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            name="title"
            id="title"
            placeholder="Title"
          />
        </div>
        <div className="flex flex-col px-2">
          <label htmlFor="Title" className="flex flex-col font-bold px-1">
            Todo Description
          </label>
          <input
            className="px-2 py-1 outline-none rounded-lg bg-white dark:bg-slate-600 border border-gray-400"
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            name="description"
            id="description"
            placeholder="Description"
          />
        </div>

        <div className="cursor-pointer flex items-center justify-center ">
          <button className="bg-green-600 px-2 py-1 rounded-lg w-28 text-center font-bold text-white hover:outline-none">
            Add Note
          </button>
        </div>
      </form>
    </div>
  );
}
