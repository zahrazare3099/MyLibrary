import { FunnelIcon, LightBulbIcon } from "@heroicons/react/24/outline";
import { RectangleStackIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function HeaderContent() {
  const host = window.location.pathname.split("/")[1];

  // const base_url = window.location.origin;
  // "http://stackoverflow.com"//localhost:5173 HeaderContent.jsx:6:10
  // const host = window.location.host;
  // stackoverflow.com //  http: localhost: 5173;

  return (
    <div className="px-3 py-1 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 text-amber-800 flex items-center justify-between">
      <div className="py-1 font-bold ">
        {host == "Reducer"
          ? "Reducer"
          : host == "context"
          ? "context"
          : host == "Redux-Toolkit"
          ? "Redux Toolkit"
          : host == "redux-sync"
          ? "Redux Toolkit sync"
          : host == "redux-async"
          ? "Redux Toolkit async"
          : host == "Tools"
          ? "Tools"
          : null}
      </div>
      <div className="flex items-center justify-around w-16">
        <RectangleStackIcon className="cursor-pointer flex h-5 w-5 text-amber-800 dark:text-white" />
        <LightBulbIcon className="cursor-pointer flex h-5 w-5 text-amber-800 dark:text-white" />
      </div>
    </div>
  );
}
