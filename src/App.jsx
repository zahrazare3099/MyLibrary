import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import NoMatch from "./components/notFound/NoMatch";
import HandleByReducer from "./components/ReducerBox/HandleByReducer";
import HandleByContext from "./components/contextBox/HandleByContext";
import ReduxToolkit from "./components/redux-toolkitBox/ReduxToolkit";
import HandleByReduxSync from "./components/reduxThunkSyncBox/HandleByReduxSync";
import HandleByReduxAsync from "./components/reduxThunkAsyncBox/HandleByReduxAsync";
import ShowTools from "./components/ShowTools";
import "./App.css";

function App() {
  return (
    <div className="AppPage">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HandleByReducer />} />
          <Route path="Reducer" element={<HandleByReducer />} />
          <Route path="context" element={<HandleByContext />} />
          <Route path="Redux-Toolkit" element={<ReduxToolkit />} />
          <Route path="redux-sync" element={<HandleByReduxSync />} />
          <Route path="redux-async" element={<HandleByReduxAsync />} />
          <Route path="Tools" element={<ShowTools />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
