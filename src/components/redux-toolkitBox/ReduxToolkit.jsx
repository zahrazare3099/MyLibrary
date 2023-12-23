import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Cake from "./components/Cake";
import Milk from "./components/Milk";
import UserShow from "./components/User";
import HeaderContent from "../HeaderContent";

export default function ReduxToolkit() {
  return (
    <div className="p-2">
      <HeaderContent />
      <Provider store={store}>
        <div className="py-2 flex flex-col md:flex-row justify-evenly gap-3">
          <Cake />
          <Milk />
          <UserShow />
        </div>
      </Provider>
    </div>
  );
}
