import NotesProvider from "./NotesProvider";
import HeaderContent from "../HeaderContent";
import Form from "./Form";
import ShowNotes from "./ShowNotes";

export default function HandleByContext() {
  return (
    <div className="p-2 h-screen">
      <NotesProvider>
        <HeaderContent />
        <div className="py-2 flex flex-col md:flex-row justify-evenly gap-3">
          <Form />
          <ShowNotes />
        </div>
      </NotesProvider>
    </div>
  );
}
