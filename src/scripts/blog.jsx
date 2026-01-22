import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '/src/styles/index.css'
import Navbar from '../components/Navbar.jsx'
import BlogPost from '../components/BlogPost.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <BlogPost image={'../assets/shader.png'} text="New shader!" />
  </StrictMode>,
)
