import React, { useState } from "react";

export default function NotesStatus({ notes }) {
  let [select, setSelect] = useState(0);
  const compeleteNote = notes.filter((n) => n.compelte).length;
  const unCompeletenote = notes.length - compeleteNote;
  return (
    <div>
      NotesStatus:{" "}
      <div className="HeaderStatus  mx-2 mb-2 font-mono text-sm flex flex-row justify-between text-blue-500">
        <button
          onClick={() => setSelect(1)}
          className={`p-2 text-xs  w-24 flex flex-grow justify-center items-center  ${
            select == 1
              ? " ring-2 ring-blue-400 rounded-lg bg-blue-300 text-white font-bold shadow-md shadow-white"
              : null
          }`}
        >
          All
          <span className="text-xs">({notes.length})</span>
        </button>
        <button
          onClick={() => setSelect(2)}
          className={`p-2 text-xs w-24 flex flex-grow justify-center items-center  mx-2 ${
            select == 2
              ? " ring-2 ring-blue-400 rounded-lg bg-blue-300 text-white font-bold shadow-md shadow-white"
              : null
          }`}
        >
          InProgress
          <span className="text-xs">({unCompeletenote})</span>
        </button>
        <button
          onClick={() => setSelect(3)}
          className={`p-2 text-xs w-24 flex flex-grow justify-center items-center  ${
            select == 3
              ? " ring-2 ring-blue-400 rounded-lg bg-blue-300 text-white font-bold shadow-md shadow-white"
              : null
          }`}
        >
          compelted
          <span className="text-xs">({compeleteNote})</span>
        </button>
      </div>
    </div>
  );
}
