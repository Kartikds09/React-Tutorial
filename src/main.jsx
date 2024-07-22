import React from "react";
import ReactDOM from "react-dom/client";
import AppProps from "./App_props.jsx";
import AppOnClick from "./App_onClick.jsx";
import AppMyComponent from "./App_myComponent.jsx";
import App_counter from "./App_counter.jsx";
// import "./index.css";
// import "./Counter.css";
import App_onChange from "./App_onChange.jsx";
import App_ColorPicker from "./App_ColorPicker.jsx";

import App_updObjState from './App_updObjState.jsx'

import App_updArrState from './App_updArrState.jsx'
import App_updObjArrCars from './App_updArrObjCars.jsx'

// import ToDoList from './ToDo-List/toDoList.jsx'
// import "./style_todo.css"

// import App_useEffect from './useEffect/App_useEffect.jsx'
// import App_height_width from './useEffect/App_height_width.jsx'

// import App_Clock from './Clock/App_clock.jsx'
// import "./Clock/Clock.css"

// import App_useContext from './useContext/useContext.jsx'
// import "./useContext/style_context.css"

import App_useRef from "./useRef-hook/App_useRef.jsx";


import StopWatch from './Stopwatch/StopWatch.jsx'
import "./Stopwatch/style_stopWatch.css"

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
      {/* <App_updArrState/> */}

      {/* <App_updObjArrCars/> */}

      {/* <ToDoList/> */}
      {/* <App_Clock/> */}

      {/* <App_useContext/> */}
      {/* <App_useRef/> */}
      
      <StopWatch/>

  </React.StrictMode>
);
