import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '/src/styles/index.css'
import GameInfo from '../components/GameInfo.jsx'
import Navbar from '../components/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <GameInfo />
  </StrictMode>,
)
