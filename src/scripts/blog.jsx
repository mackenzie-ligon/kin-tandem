import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '/src/styles/index.css'
import Navbar from '../components/Navbar.jsx'
import BlogPage from '../components/BlogPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <div class='content'>
      <BlogPage />
    </div>
  </StrictMode>,
)
