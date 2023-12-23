import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyMilk } from "../Features/Milk/milkSlice";

export default function Milk() {
  const state = useSelector((state) => state.milk);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col md:w-1/2 border border-slate-400 p-2 rounded-lg">
      <h1 className="text-blue-600 font-bold text-lg">Milk</h1>
      <div>
        <h3>Buttel of Milk : {state.numOfMilkButtel}</h3>
        <button
          onClick={() => dispatch(buyMilk())}
          className="bg-blue-400 px-2 py-1 rounded-lg"
        >
          Buy Milk
        </button>
      </div>
    </div>
  );
}
