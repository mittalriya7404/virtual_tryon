import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ProductContextProvider from "./context/ProductContextProvide.jsx";


createRoot(document.getElementById('root')).render(
    
  <StrictMode>
    <BrowserRouter>
      <ProductContextProvider> {/* ✅ Wrap App with Context Provider */}
        <App />
      </ProductContextProvider>
    </BrowserRouter>
  </StrictMode>
)
