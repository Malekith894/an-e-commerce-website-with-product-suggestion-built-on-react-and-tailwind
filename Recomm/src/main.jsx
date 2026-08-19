import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './components/layout/index.jsx'
import { useEffect } from 'react'
import Home from './Pages/home/index.jsx'
import axios from 'axios';
import Fetching from './components/data/index.jsx';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Details from './Pages/product/index.jsx'
import Shopping_seed from './Pages/shop/index.jsx'
import { useState } from 'react'



const router=createBrowserRouter([
  {
    path:'/',
    element: <Home/>
  },
  {
    path:'/product/:id',
    element:<Details/>
  },
  {
    path:'shop',
    element:<Shopping_seed />
  }
  
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
