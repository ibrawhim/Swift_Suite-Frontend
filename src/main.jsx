import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { NextUIProvider } from '@nextui-org/react'
import DashboardContext from './context/Dashboard.jsx'
import {NextUIProvider} from "@nextui-org/react";
import { BrowserRouter } from 'react-router-dom';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>

      <DashboardContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </DashboardContext>

      <BrowserRouter>
        <App/>
      </BrowserRouter>

    </NextUIProvider>
  </React.StrictMode>,
)
