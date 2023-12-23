import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import { Content } from "./Content";

export default function Layout() {
  return (
    <div className="flex flex-col ">
      <Header />
      {/* bg-neutral-200 */}
      <div className="flex bg-slate-200 dark:bg-slate-500  min-h-fit max-h-full">
        <Menu />
        <Content />
      </div>
    </div>
  );
}
