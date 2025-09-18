import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material'
import App from './App'
import { CartProvider } from './context/CartContext'
import './index.css'


const theme = createTheme({
  palette: { mode: 'light' }
})


createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <ThemeProvider theme={theme}>
    <CssBaseline />
      <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
</React.StrictMode>
)
