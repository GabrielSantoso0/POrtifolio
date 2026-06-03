import React from 'react'
import ReactDOM from 'react-dom/client'
import PortfolioApp from './PortfolioApp.tsx'
import './styles-portfolio.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PortfolioApp onNavigateTo={() => {}} />
  </React.StrictMode>,
)
