import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const router=createBrowserRouter([
  {
    path:"/",
    element:<div>Hello MAMU</div>,
  },{
    path:"/home",
    element:<div>This is Home</div>
  },
  {
    path:"/nana",
    element:<div>This is NANA</div>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
