import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Catalog from './pages/Catalog'
import CartPage from './pages/CartPage'
import { AppContext } from './context/AppContext'
import { AuthProvider } from './context/AuthContext'
import ContactsPage from './pages/ContactsPage'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import { ThemeProvider } from '@mui/material'
import theme from '../theme'
import Blog from './pages/Blog'

const App = () => {
  const [quantity, setQuantity] = useState(0)
  const [cartItem, setCartItem] = useState([])

  return (
    <AuthProvider>
      <AppContext.Provider
        value={{ quantity, setQuantity, cartItem, setCartItem }}
      >
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="catalog" element={<Catalog />} />
              <Route path="blog" element={<Blog />} />
              <Route path="contacts" element={<ContactsPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="signin" element={<SignIn />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </AppContext.Provider>
    </AuthProvider>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)
