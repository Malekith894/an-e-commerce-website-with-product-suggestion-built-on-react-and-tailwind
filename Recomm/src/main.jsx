import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { useEffect } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import axios from 'axios';
import Fetching from './components/data/index.jsx';







createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Fetching/>
    <App />
  </StrictMode>,
)
