import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import HeadNavBar from "./components/HeadNavBar"
import './index.css'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeadNavBar/>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
