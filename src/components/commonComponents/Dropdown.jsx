import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useRef, useState } from "react";
import useOutsideclick from "../Hooks/useOutsideclick";

export default function Dropdown() {
  let [choose, setChoose] = useState(null);
  const [open, setOpen] = useState(false);
  const openMore = useRef();
  useOutsideclick(openMore, "exption", () => setOpen(false));
  return (
    <div className="relative flex flex-col p-2 w-4/5 border border-amber-800 rounded-lg bg-neutral-300">
      <div className="relative text-sm text-start pb-2 flex">
        You're selected : {choose || "---"}
      </div>
      <button
        ref={openMore}
        id="exption"
        className="flex justify-between w-20 p-1 m-0 rounded-lg  bg-blue-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
        onClick={() => setOpen((pre) => !pre)}
      >
        <p className="text-sm pl-1">more</p>
        <ChevronDownIcon className="w-5 h-5 pt-1" />
      </button>
      {/* open Box */}
      {open && (
        <div
          className="w-24 bg-slate-200 rounded-lg left-24 top-8 overflow-hidden border border-blue-500 absolute"
          // style={{ display: open ? "" : "none" }}
        >
          <a
            className="block hover:bg-slate-300 p-1 "
            onClick={(e) => {
              e.preventDefault();
              setChoose("Connect us");
              setOpen(false);
            }}
          >
            Connect us
          </a>
          <a
            className="block hover:bg-slate-300 p-1 "
            onClick={(e) => {
              e.preventDefault();
              setChoose("Profile");
              setOpen(false);
            }}
          >
            Profile
          </a>
          <a
            className="block hover:bg-slate-300 p-1 "
            onClick={(e) => {
              e.preventDefault();
              setChoose("Setting");
              setOpen(false);
            }}
          >
            Setting
          </a>
        </div>
      )}
    </div>
  );
}
