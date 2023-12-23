import {
  AcademicCapIcon,
  Bars3Icon,
  WrenchIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  const [menuStatus, setMenuStatus] = useState(1);
  const [slectedItem, setSlectedItem] = useState(null);
  const menuItem = [
    { id: 1, name: "Reducer", iconName: AcademicCapIcon },
    { id: 2, name: "context", iconName: AcademicCapIcon },
    { id: 3, name: "Redux-Toolkit", iconName: AcademicCapIcon },
    { id: 4, name: "redux-sync", iconName: AcademicCapIcon },
    { id: 5, name: "redux-async", iconName: AcademicCapIcon },
    { id: 6, name: "Tools", iconName: WrenchIcon },
  ];
  const IconCompont = ({ iconName, ...rest }) => {
    const Tag = iconName;
    return (
      <Tag {...rest} className="h-6 w-6 text-amber-800 hover:text-amber-950" />
    );
  };

  return (
    <div
      className={`menuLayer flex flex-col h-fit bg-neutral-300 dark:bg-slate-800 p-2 
       text-amber-800 dark:border-slate-500 rounded-tr-2xl rounded-br-2xl border-y-2 border-r-2  ${
         menuStatus
           ? "w-44 transition-all ease-in-out delay-0 duration-1000"
           : " w-12 items-center transition-all ease-in-out delay-500 duration-700"
       }`}
      // style={{ height: "91vh" }}
    >
      <div className="relativeLayer flex flex-col text-neutral-500 dark:text-slate-300">
        {/* menu icon */}
        <div className="p-1">
          <Bars3Icon
            className={`iconMenu h-6 w-6 transition-all ease-in-out 
            duration-1000 ${menuStatus ? "rotate-0" : "-rotate-180"}`}
            onClick={() => setMenuStatus((s) => !s)}
          />
        </div>
        {/* item of menu */}
        <div className="menuItem flex flex-col gap-1 ">
          {menuItem.map((item, index) => {
            return (
              <Link
                onClick={() => setSlectedItem(item.id)}
                to={`${item.name}`}
                key={index + 1}
                className={`cursor-pointer flex p-1 rounded-lg hover:bg-neutral-400 ${
                  slectedItem == index + 1 ? "bg-neutral-400" : null
                }`}
              >
                <IconCompont iconName={item.iconName} />
                <p
                  className={`text-amber-800 hover:text-amber-950 font-bold font-mono ${
                    menuStatus ? "px-1 whitespace-nowrap" : "hidden"
                  }`}
                >
                  {item.name}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
