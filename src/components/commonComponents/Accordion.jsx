import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function Accordion() {
  const faqData = [
    {
      title: "Lorem ipsum One",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nesciunt, deleniti quaerat a laudantium accusamus facere non accusantium, assumenda illo officia soluta eveniet placeat quia! Cum ipsa reiciendis provident quidem!",
      id: 1,
    },
    {
      title: "Lorem ipsum Two",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nesciunt, deleniti quaerat a laudantium accusamus facere non accusantium, assumenda illo officia soluta eveniet placeat quia! Cum ipsa reiciendis provident quidem!",
      id: 2,
    },
    ,
    {
      title: "Lorem ipsum Three",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nesciunt, deleniti quaerat a laudantium accusamus facere non accusantium, assumenda illo officia soluta eveniet placeat quia! Cum ipsa reiciendis provident quidem!",
      id: 3,
    },
  ];
  let [isOpen, setIsOpen] = useState(null);
  return (
    <div className="bg-white rounded-lg overflow-hidden px-1  w-full">
      {faqData.map((item, id) => (
        <AccordionItem
          item={item}
          key={id}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          id={item.id}
        />
      ))}
    </div>
  );
}
const AccordionItem = ({ item, isOpen, setIsOpen, id }) => {
  let isopen = id === isOpen;
  const style = {
    accordionItem: {
      description: {
        display: isopen == false ? "none" : null,
        opacity: isopen == false ? "0" : "1",
        maxHeight: isopen == false ? "0px" : "100vh",
        overflow: "hidden",
        transition:
          isopen == false ? "all 0.3s ease-in-out" : "all 0.2s ease-in-out",
      },
      ChevronIcon: {
        transition: "all 0.3s ease-in-out",
        rotate: isopen == false ? "180deg" : "0deg",
      },
    },
  };
  return (
    <div className="bg-white ">
      <div
        onClick={() => setIsOpen(id == isOpen ? null : id)}
        className="cursor-pointer text-purple-800 font-bold font-mono border-b-2 flex items-center justify-between  border-gray-300 p-1"
      >
        {item.title}
        <ChevronDownIcon
          className="h-4 w-4 text-blue-500 text-sm mt-2"
          style={style.accordionItem.ChevronIcon}
        />
      </div>
      <div className="text-sm p-1" style={style.accordionItem.description}>
        {item.description}
      </div>
    </div>
  );
};
