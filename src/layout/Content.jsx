import { Outlet } from "react-router-dom";

export const Content = () => {
  return (
    <div className="bg-slate-200 h-fit dark:bg-slate-500 text-black dark:text-white flex flex-1 flex-col">
      <Outlet />
    </div>
  );
};
