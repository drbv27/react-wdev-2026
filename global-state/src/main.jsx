import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './ThemeContext.jsx'
import { CarritoProvider } from './CarritoContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <CarritoProvider>
        <App />
      </CarritoProvider>
    </ThemeProvider>
  </StrictMode>,
)
