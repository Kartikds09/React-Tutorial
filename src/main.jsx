import React from "react";
import ReactDOM from "react-dom/client";
import AppProps from "./App_props.jsx";
import AppOnClick from "./App_onClick.jsx";
import AppMyComponent from "./App_myComponent.jsx";
import App_counter from "./App_counter.jsx";
import "./index.css";
import "./Counter.css";
import App_onChange from "./App_onChange.jsx";
import App_ColorPicker from "./App_ColorPicker.jsx";

import App_updObjState from './App_updObjState.jsx'

import App_updArrState from './App_updArrState.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <AppProps /> */}
    {/* <AppOnClick/> */}
    {/* <AppMyComponent/>
     */}
    {/* <App_onChange/> */}
    {/* <App_ColorPicker/> */}
    {/* <App_counter/> */}

      {/* <App_updObjState/> */}
      <App_updArrState/>





  </React.StrictMode>
);
