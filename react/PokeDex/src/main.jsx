import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Header } from './components/header.jsx'
import Hero from './components/hero.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <App />
  </StrictMode>,
)
