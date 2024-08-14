import { LightBulbIcon } from "@heroicons/react/24/outline";
import { RectangleStackIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

export default function HeaderContent() {
  const host = window.location.pathname.split("/")[1];
  let [headerName, setHeaderName] = useState("Reducer");
  const headerTitle = (host) => {
    switch (host) {
      case "" || "Reducer":
        setHeaderName("Reducer");
        break;
      case "context":
        setHeaderName("context");
        break;
      case "Redux-Toolkit":
        setHeaderName("Redux Toolkit");
        break;
      case "redux-sync":
        setHeaderName("Redux Toolkit sync");
        break;
      case "redux-async":
        setHeaderName("Redux Toolkit async");
        break;
      case "Tools":
        setHeaderName("Tools");
        break;
      default:
        setHeaderName("Reducer");
    }
  };
  useEffect(() => {
    headerTitle(host);
  }, [host]);

  return (
    <div className="px-3 py-1 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 text-amber-800 flex items-center justify-between">
      <div className="py-1 font-bold ">{headerName}</div>
      <div className="flex items-center justify-around w-16">
        <RectangleStackIcon className="cursor-pointer flex h-5 w-5 text-amber-800 dark:text-white" />
        <LightBulbIcon className="cursor-pointer flex h-5 w-5 text-amber-800 dark:text-white" />
      </div>
    </div>
  );
}
