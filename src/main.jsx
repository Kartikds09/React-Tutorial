import React from 'react'
import ReactDOM from 'react-dom/client'
import AppProps from './App_props.jsx'
import AppOnClick from './App_onClick.jsx'
import AppMyComponent from './App_myComponent.jsx'
import App from './App.jsx'
import './index.css'
import './Counter.css'
import App_onChange from './App_onChange.jsx'
import App_ColorPicker from './App_ColorPicker.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <AppProps /> */}
    {/* <AppOnClick/> */}
    {/* <AppMyComponent/>
     */}      
     {/* <App_onChange/> */}

      <App_ColorPicker/>

  </React.StrictMode>,
)
