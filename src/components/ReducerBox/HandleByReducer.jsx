import React, { useReducer, useState } from "react";
import Form from "./Form";
import HeaderContent from "../HeaderContent";
import ShowNotes from "./ShowNotes";

function handleNotes(notes, action) {
  switch (action.type) {
    case "add":
      return [...notes, action.payload];
    case "delete":
      return notes.filter((note) => note.id !== action.payload);
    case "checkbox":
      return notes.map((note) =>
        note.id == action.payload
          ? { ...note, compeleted: !note.compeleted }
          : note
      );
    default:
      throw new Error(`unknown error => ${type}`);
  }
}

export default function HandleByReducer() {
  const [notes, dispatch] = useReducer(handleNotes, []);
  // handle sort
  let [sortNotes, setSortNotes] = useState("latest");
  // add note
  const handleAddNote = (newNote) =>
    dispatch({ type: "add", payload: newNote });
  // delete note
  const handleDeleteNote = (id) => dispatch({ type: "delete", payload: id });
  // complete note
  const handleCheckboxNote = (id) =>
    dispatch({ type: "checkbox", payload: Number(id) });

  return (
    <div className="p-2 h-screen">
      <HeaderContent />
      <div className="py-2  flex flex-col md:flex-row justify-evenly gap-3">
        <Form handleAddNote={handleAddNote} />
        <ShowNotes
          notes={notes}
          handleDeleteNote={handleDeleteNote}
          handleCheckboxNote={handleCheckboxNote}
          sortNotes={sortNotes}
          handleSortNotes={(e) => {
            e.preventDefault();
            setSortNotes(e.target.value);
          }}
        />
      </div>
    </div>
  );
}
