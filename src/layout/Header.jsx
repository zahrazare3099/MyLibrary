import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Toggle from "../components/commonComponents/Toggle";

export default function Header() {
  return (
    <div className="Headerlayer p-3 flex items-center bg-neutral-300 dark:bg-slate-900 text-amber-800 text-sm md:text-base">
      <h1 className="font-bold text-lg w-1/3">ZIZI Library</h1>
      <div className="flex items-center flex-1 justify-between">
        <div className="flex p-1 items-center bg-white rounded-lg overflow-hidden">
          <MagnifyingGlassIcon className="h-5 w-5" />
          <input
            type="search"
            placeholder="search"
            className="px-1 outline-none bg-white text-black w-40 md:w-44"
          />
        </div>
        <div className="pr-2 w-28 flex items-center justify-end">
          <Toggle />
        </div>
      </div>
    </div>
  );
}
