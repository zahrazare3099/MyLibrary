import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import { Content } from "./Content";

export default function Layout() {
  return (
    <div className="flex flex-col ">
      <Header />
      <div className="flex bg-slate-200 dark:bg-slate-500 h-dvh">
        <Menu />
        <Content />
      </div>
    </div>
  );
}
