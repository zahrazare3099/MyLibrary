import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../Features/Cake/cakeSlice";

export default function Cake() {
  const [cakeValue, setCakeValue] = useState(1);
  // handle redux
  const state = useSelector((state) => state.cake);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col md:w-1/2 border border-slate-400 p-2 rounded-lg">
      <h1 className="text-green-600 font-bold text-lg">Cake</h1>
      <div>
        <input
          className="px-2 py-1 outline-none rounded-lg bg-white dark:bg-slate-600 border border-gray-400"
          value={cakeValue}
          type="number"
          name="cake"
          id="cake"
          onChange={(e) => setCakeValue(e.target.value)}
        />
        <h3>numOfCake : {state.numOfCake}</h3>
        <button
          className="bg-green-400 px-2 py-1 rounded-lg"
          onClick={() => dispatch(buyCake(cakeValue))}
        >
          Buy cake
        </button>
      </div>
    </div>
  );
}
