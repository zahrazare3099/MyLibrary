import React from "react";
import HeaderContent from "./HeaderContent";
import Accordion from "./commonComponents/Accordion";
import AccordionSecend from "./commonComponents/AccordionSecend";
import Dropdown from "./commonComponents/Dropdown";
import RadioGroup from "./commonComponents/RadioGroup";
import SelectedTab from "./commonComponents/SelectedTab";
export default function ShowTools() {
  return (
    <div className="p-2">
      <HeaderContent />
      <div className="my-2 dark:text-black text-center bg-slate-200 dark:bg-slate-500 flex flex-wrap gap-3 rounded-lg">
        <div className="w-full grow sm:w-3/5 flex flex-col gap-3 border border-slate-500 p-2 rounded-lg dark:bg-slate-700">
          <h3 className="text-center text-teal-600 font-bold">Accordion</h3>
          <div className="flex flex-col xl:flex-row gap-3 ">
            <Accordion />
            <AccordionSecend />
          </div>
        </div>
        <div className="dark:bg-slate-700 border grow border-slate-500 p-2 rounded-lg flex flex-col">
          <div className="flex flex-col items-center gap-3 w-full">
            <h3 className="text-center text-teal-600 font-bold ">
              SelectedTab
            </h3>
            <SelectedTab />
          </div>
          <div className="flex flex-col items-center gap-3 pt-3 w-full">
            <h3 className="text-center text-teal-600 font-bold">Dropdown</h3>
            <Dropdown />
          </div>
          <div className="flex flex-col items-center gap-3 pt-3 w-full pb-2">
            <h3 className="text-center text-teal-600 font-bold">RadioGroup</h3>
            <RadioGroup />
          </div>
        </div>
      </div>
    </div>
  );
}
