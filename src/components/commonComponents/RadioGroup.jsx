import { CheckIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

export default function RadioGroup() {
  const [redioGroup, setRedioGroup] = useState(0);
  return (
    <div className="flex flex-col w-4/5 gap-2 text-start bg-blue-900 p-3 rounded-lg text-sm">
      <div
        onClick={() => setRedioGroup(1)}
        className={`item bg-stone-200 rounded-lg p-2 flex items-center justify-between ${
          redioGroup == 1 ? "ring ring-blue-400 bg-white text-blue-800" : null
        }`}
      >
        <div className="flex flex-col">
          <span className="font-bold">ipsum</span>
          <span className="font-thin">Lorem ipsum dolor sit amet </span>
        </div>
        {redioGroup == 1 ? (
          <div className="ml-2 border-2 border-blue-500 rounded-full">
            <CheckIcon className="w-6 h-6 p-1 bg-blue-500  text-white rounded-full border-2" />
          </div>
        ) : null}
      </div>
      <div
        onClick={() => setRedioGroup(2)}
        className={`item bg-stone-200 rounded-lg p-2 flex items-center justify-between ${
          redioGroup == 2 ? "ring ring-blue-400 bg-white text-blue-800" : null
        }`}
      >
        <div className="flex flex-col">
          <span className="font-bold">ipsum</span>
          <span className="font-thin">Lorem ipsum dolor sit amet </span>
        </div>
        {redioGroup == 2 ? (
          <div className="ml-2 border-2 border-blue-500 rounded-full">
            <CheckIcon className="w-6 h-6 p-1 bg-blue-500  text-white rounded-full border-2" />
          </div>
        ) : null}
      </div>
      <div
        onClick={() => setRedioGroup(3)}
        className={`item bg-stone-200 rounded-lg p-2 flex items-center justify-between ${
          redioGroup == 3 ? "ring ring-blue-400 bg-white text-blue-800" : null
        }`}
      >
        <div className="flex flex-col">
          <span className="font-bold">ipsum</span>
          <span className="font-thin">Lorem ipsum dolor sit amet </span>
        </div>
        {redioGroup == 3 ? (
          <div className="ml-2 border-2 border-blue-500 rounded-full">
            <CheckIcon className="w-6 h-6 p-1 bg-blue-500  text-white rounded-full border-2" />
          </div>
        ) : null}
      </div>
    </div>
  );
}
