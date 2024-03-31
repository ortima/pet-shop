import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Catalog from './pages/Catalog'
import CartPage from './pages/CartPage'
import { AppContext } from './context/AppContext'
import { AuthContextProvider } from './context/AuthContext'
import ContactsPage from './pages/ContactsPage'
import Blog from './pages/Blog'
import Login from './pages/auth/Login'
import SignUp from './pages/auth/SignUp'
import Account from './pages/auth/Account'
import ProtectedRoutes from './utils/ProtectedRoutes'
import ScrollToTop from './utils/ScrollToTop'

const App = () => {
  const [quantity, setQuantity] = useState(0)
  const [cartItem, setCartItem] = useState([])

  return (
    <AuthContextProvider>
      <AppContext.Provider
        value={{ quantity, setQuantity, cartItem, setCartItem }}
      >
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="contacts" element={<ContactsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<NotFound />} />
            <Route
              path="/account"
              element={
                <ProtectedRoutes>
                  <Account />
                </ProtectedRoutes>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </AuthContextProvider>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)
