import { createRoot } from 'react-dom/client'
import App from './App'
import { StrictMode } from 'react'
import '@/styles/index.less'

const root = createRoot(document.getElementById('app') as HTMLDivElement)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
