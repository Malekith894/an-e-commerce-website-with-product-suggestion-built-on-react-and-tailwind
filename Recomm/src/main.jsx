import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { useEffect } from 'react'
import Home from './Pages/home/index.jsx'
import axios from 'axios';
import Fetching from './components/data/index.jsx';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Details from './Pages/product/index.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element: <Home/>
  },
  {
    path:'/product/:id',
    element:<Details/>
  }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
