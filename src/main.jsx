// main.jsx
// ------------
// Application entry point; bootstraps React into the page. It loads global
// CSS (including Bootstrap) and renders the <App /> component inside the
// element with id="root". Wrapped in <StrictMode> for development checks.

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
