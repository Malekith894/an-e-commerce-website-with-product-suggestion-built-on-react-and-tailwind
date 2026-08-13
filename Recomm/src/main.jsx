import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { useEffect } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import axios from 'axios';

useEffect(async function(){
  try{
    const reponse=await axios.get("https://fakestoreapi.com/products");
    const data=await response.json()
    console.log(data);
  } catch(error){
    console.log("erorr getting the info",error)
  };
})






createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
