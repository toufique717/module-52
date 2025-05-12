import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './routs/Routs.jsx'
import Authprovider from './provider/Authprovider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Authprovider>
        <RouterProvider router={router}></RouterProvider>
      </Authprovider>
  </StrictMode>,
)