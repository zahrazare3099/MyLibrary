import React, { useState } from "react";
const tabData = [
  { id: 1, title: "Tab 1", content: "discreption for tab 1 ✨" },
  { id: 2, title: "Tab 2", content: "discreption for tab 2 🐱‍🚀" },
  { id: 3, title: "Tab 3", content: "discreption for tab 3 🐱‍🐉" },
];
export default function SelectedTab() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="w-min flex flex-col items-center overflow-hidden border border-amber-800 rounded-lg bg-neutral-300">
      <div className="flex justify-evenly p-1">
        {tabData.map((item) => (
          <span
            className={`w-20 text-center hover:text-amber-800  ${
              item.id == activeTab && "border-b border-amber-800 text-amber-800"
            } `}
            onClick={() => setActiveTab(item.id)}
            key={item.id}
          >
            {item.title}
          </span>
        ))}
      </div>
      <div className="py-2">
        {/* we have two way to show content : one of them is comment */}
        {tabData.map((item) => (item.id === activeTab ? item.content : null))}
        {/* {tabData[activeTab - 1].content} */}
      </div>
    </div>
  );
}
