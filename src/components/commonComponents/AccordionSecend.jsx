import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function AccordionSecend() {
  let [open, setOpen] = useState(null);
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
  return (
    <div className="FAQ bg-stone-100 p-2 rounded-lg flex flex-col gap-2 w-full">
      {faqData.map((item, id) => {
        return (
          <AccordionItem
            title={item.title}
            id={item.id}
            open={open}
            setOpen={setOpen}
            key={id}
          >
            {item.description}
          </AccordionItem>
        );
      })}
      <AccordionItem
        title="Lorem ipsum Four Uniq"
        id={4}
        open={open}
        setOpen={setOpen}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nesciunt,
        deleniti quaerat a laudantium accusamus facere non accusantium,
        assumenda illo officia soluta eveniet placeat quia! Cum ipsa reiciendis
        provident quidem!
        <ul className=" mx-1">
          <p className="text-green-400 mx-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            odio iste aperiam quos harum fugiat pariatur obcaecati! Maxime,
            deleniti. Laborum consequuntur deleniti laudantium ipsum quasi
            neque, in sequi nobis alias.
          </p>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </ul>
      </AccordionItem>
    </div>
  );
}
const AccordionItem = ({ title, id, open, setOpen, children }) => {
  //   let [isopen, setIsOpen] = useState(false);
  let isopen = id === open;
  const accourdionStyle = {
    content: {
      transition:
        isopen == false ? "all 0.3s ease-in-out" : "all 0.2s ease-in-out",
      maxHeight: isopen == false ? "0px" : "100vh",
      overflow: "hidden",
      opacity: isopen == false ? "0" : "1",
      padding: isopen == false ? "0" : "0.5rem",
    },
    ChevronIcon: {
      transition: "all 0.3s ease-in-out",
      rotate: isopen == false ? "180deg" : "0deg",
      transformOrigin: "center",
    },
  };
  return (
    <div className="card flex flex-col">
      <span
        className="bg-green-100 p-2 rounded-lg cursor-pointer flex justify-between items-center font-serif text-sm"
        // onClick={() => setIsOpen((is) => !is)}
        onClick={() => setOpen(id == open ? null : id)}
      >
        {title}
        <ChevronDownIcon
          className="h-4 w-4 text-blue-500 text-sm"
          style={accourdionStyle.ChevronIcon}
        />
      </span>

      <span className={`font-light text-sm `} style={accourdionStyle.content}>
        {children}
      </span>
    </div>
  );
};
