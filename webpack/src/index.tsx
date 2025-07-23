import { createRoot } from 'react-dom/client'
import '@ant-design/v5-patch-for-react-19'

import { StrictMode } from 'react'
import React from 'react'
import App from './App'
import './styles/index.css'

createRoot(document.getElementById('app')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
