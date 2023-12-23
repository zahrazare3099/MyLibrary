import React, { createContext, useContext, useReducer } from "react";

const NotesContext = createContext(null);
const NotesDispatch = createContext(null);

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
    // case "earest":
    //   return [...notes].sort(
    //     (a, b) => new Date(b.onCreated) - new Date(a.onCreated)
    //   );
    // case "latest":
    //   return [...notes].sort(
    //     (a, b) => new Date(a.onCreated) - new Date(b.onCreated)
    //   );
    // case "completed":
    //   return [...notes].sort(
    //     (a, b) => Boolean(a.compeleted) - Boolean(b.compeleted)
    //   );
    default:
      throw new Error(`unknown error => ${type}`);
  }
}

export default function NotesProvider({ children }) {
  const [notes, dispatch] = useReducer(handleNotes, []);
  //  to context for better performance
  return (
    <NotesContext.Provider value={{ notes }}>
      <NotesDispatch.Provider value={{ dispatch }}>
        {children}
      </NotesDispatch.Provider>
    </NotesContext.Provider>
  );
}

export const useNotesContext = () => useContext(NotesContext);
export const useNotesDispatch = () => useContext(NotesDispatch);
