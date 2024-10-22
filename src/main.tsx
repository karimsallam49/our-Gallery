import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Homepage from './pages/Homepage'
import "../src/Mainstyle/mainstyle.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Homepage/>
  </StrictMode>,
)
