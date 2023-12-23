import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";

export default function Toggle() {
  const [toggleState, setToggleState] = useState(1);
  const [theme, setTheme] = useState(null);
  // can't sync to brower theme!
  useEffect(() => {
    if (window.matchMedia("(prefers-color-schema:dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);
  useEffect(() => {
    if (theme == "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <div className=" border-amber-800 bg-slate-100 rounded-3xl w-12 border-2 overflow-hidden">
      <div className=" flex items-center justify-around rounded-3xl">
        <SunIcon
          className={`h-5 w-5 rounded-full transition-all outline outline-slate-100 duration-500 ease-in-out border-2 border-slate-100 ${
            toggleState ? "bg-amber-800 text-amber-800 " : "text-yellow-500"
          }`}
          onClick={() => {
            setToggleState(1);
            setTheme("light");
          }}
        />
        <MoonIcon
          className={`h-5 w-5 rounded-full transition-all outline outline-slate-100 duration-500 ease-in-out border-2 border-slate-100 -rotate-90 ${
            Boolean(toggleState)
              ? "text-yellow-500"
              : "bg-amber-800 text-amber-800 "
          }`}
          onClick={() => {
            setToggleState(0);
            setTheme("dark");
          }}
        />
      </div>
    </div>
  );
}
