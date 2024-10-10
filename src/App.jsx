import { useState } from 'react'
import './App.css'
import MainPage from './components/pages/mainPage'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import StationPage from './components/fragments/stationPage/index.jsx'
import SideBar from './components/fragments/sideBar/index.jsx'
import GantryPage from './components/fragments/gantryPage/index.jsx'
import ErrorPage from './components/pages/errorPage/index.jsx'
import ValveTestPage from './components/fragments/valveTestPage/index.jsx'
import EepromPage from './components/fragments/eepromPage/index.jsx'
import GantryMotorTestPage from './components/fragments/gantryMotorTestPage/index.jsx'
import GantryIoTestPage from './components/fragments/gantryInputOutputTestPage/index.jsx'

function App() {
  
  const router = createBrowserRouter(
    [
      {
        path:"/",
        element:<MainPage/>,
        errorElement:<ErrorPage/>,
        children:[
          {
            path:"station/",
            element:<StationPage/>,
          },  
          {
            path:"gantry/",
            element:<GantryPage/>,
          },  
          {
            path:"gantry/motor-test/",
            element:<GantryMotorTestPage/>,
          },  
          {
            path:"gantry/io-test/",
            element:<GantryIoTestPage/>,
          },  
          {
            path:"station/valve-test/",
            element:<ValveTestPage/>,
          },
          {
            path:"eeprom/",
            element:<EepromPage/>,
          },  
        ],
      },
    ]
  );

  return (
    <RouterProvider router={router}/>
  )
}

export default App
