import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '/src/styles/index.css'
import Navbar from '../components/Navbar.jsx'
import BlogPost from '../components/BlogPost.jsx'
import shader from '../assets/shader.png'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <BlogPost image={shader} text="New shader!" />
  </StrictMode>,
)
