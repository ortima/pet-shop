import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Catalog from './pages/Catalog'
import CartPage from './pages/CartPage'
import { AppContext } from './context/AppContext'

const App = () => {
  const [quantity, setQuantity] = useState(0)
  const [cartItem, setCartItem] = useState([])

  return (
    <AppContext.Provider
      value={{ quantity, setQuantity, cartItem, setCartItem }}
    >
      <BrowserRouter basename="pet-shop">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="blog" element={<div>Blog</div>} />
          <Route path="contacts" element={<div>Contacts</div>} />
          <Route path="cart" element={<CartPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

createRoot(document.getElementById('root')).render(<App />)
