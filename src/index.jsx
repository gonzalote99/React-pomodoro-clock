import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App  githubURL="https://github.com/gonzalote99" 
      defaultBreakLength='5' 
      defaultSessionLength='25' />
  </React.StrictMode>
)