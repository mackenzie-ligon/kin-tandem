import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '/src/styles/index.css'
import Navbar from '../components/Navbar.jsx'
import AboutUs from '../components/AboutUs.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div class='content'>
      <Navbar />
      <AboutUs />
    </div>
  </StrictMode>,
)
