import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '/src/styles/index.css'
import PressKit from '../components/PressKit.jsx'
import Navbar from '../components/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div class='content'>
      <Navbar />
    <PressKit />
    </div>
  </StrictMode>,
)
