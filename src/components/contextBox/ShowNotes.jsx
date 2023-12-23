import React, { useState } from "react";
import { useNotesContext, useNotesDispatch } from "./NotesProvider";
import { TrashIcon } from "@heroicons/react/24/solid";

export default function ShowNotes() {
  // useContext
  const { dispatch } = useNotesDispatch();
  const { notes } = useNotesContext();
  // handle Sort
  const [sortNotes, setSortNotes] = useState("latest");

  let sortedNotes = notes;
  if (sortNotes == "latest") {
    // dispatch({ type: "latest" });
    sortedNotes = [...notes].sort(
      (a, b) => new Date(a.onCreated) - new Date(b.onCreated)
    );
  } else if (sortNotes == "earest") {
    // dispatch({ type: "earest" });
    sortedNotes = [...notes].sort(
      (a, b) => new Date(b.onCreated) - new Date(a.onCreated)
    );
  } else if (sortNotes == "completed") {
    // dispatch({ type: "completed" });
    sortedNotes = [...notes].sort(
      (a, b) => Boolean(a.compeleted) - Boolean(b.compeleted)
    );
  }

  return (
    <div className="md:w-1/2 border border-slate-400 p-2 rounded-lg">
      <div className="flex justify-end">
        <select
          className={`p-1 text-sm bg-slate-300 dark:text-white dark:bg-slate-500 cursor-pointer border border-amber-900 rounded-md`}
          onChange={(e) => {
            setSortNotes(e.target.value);
          }}
          value={sortNotes}
        >
          <option value="latest" className="option-item">
            latest
          </option>
          <option value="earest" className="option-item">
            earest
          </option>
          <option value="completed" className="option-item">
            completed
          </option>
        </select>
      </div>
      <h2 className="font-bold text-center pb-2">NoteList</h2>
      <div className="flex flex-col">
        {Boolean(sortedNotes.length) ? (
          sortedNotes.map((item, id) => {
            return (
              <div
                className="card-body m-1 p-2 rounded-lg bg-slate-50 dark:bg-slate-600 text-black dark:text-white"
                key={id}
              >
                <div className="card-header border-b-2 pb-1 flex flex-row justify-between">
                  <div className="flex flex-col grow">
                    <div className=" flex items-center">
                      <span
                        className={`p-1 h-2 w-2 mt-1 rounded-full ${
                          item.compeleted == true
                            ? "bg-green-600 "
                            : "bg-yellow-400 "
                        }`}
                      />
                      <span
                        className={`font-semibold ml-1 ${
                          item.compeleted == true ? "line-through" : ""
                        }`}
                      >
                        {item.title}
                      </span>
                    </div>

                    <span className="font-light text-sm text-slate-500 dark:text-slate-300">
                      {item.description}
                    </span>
                  </div>
                  <div className="flex items-center mb-5">
                    <input
                      className="m-1 leading-tight"
                      type="checkbox"
                      name={item.id}
                      id={item.id}
                      value={item.id}
                      checked={item.compeleted}
                      onChange={(e) =>
                        dispatch({
                          type: "checkbox",
                          payload: Number(e.target.value),
                        })
                      }
                    />
                    <TrashIcon
                      className="h-5 w-5 text-red-500"
                      onClick={() =>
                        dispatch({ type: "delete", payload: item.id })
                      }
                    />
                  </div>
                </div>
                <div className="card-footer text-sm flex justify-between">
                  <span>
                    {new Date(item.onCreated).toLocaleDateString("en-us")}
                  </span>
                  <span>
                    {new Date(item.onCreated).toLocaleTimeString("en-us")}
                  </span>
                </div>
              </div>
            );
          })
        ) : (
          <span className="border-2 border-slate-100 rounded-lg py-1 title font-medium text-center text-gray-500 dark:text-slate-300">
            ⚠ You don't have any Task
          </span>
        )}
      </div>
    </div>
  );
}
