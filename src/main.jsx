import React from 'react'
import ReactDOM from 'react-dom/client'
import AppProps from './App_props.jsx'
import AppOnClick from './App_onClick.jsx'
import AppMyComponent from './App_myComponent.jsx'
import App from './App.jsx'
import './index.css'
import './Counter.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <AppProps /> */}
    {/* <AppOnClick/> */}
    {/* <AppMyComponent/>
     */}

     <App/>
  </React.StrictMode>,
)
