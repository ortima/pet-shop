import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Catalog from './pages/Catalog'
import CartPage from './pages/CartPage'
import { AuthContextProvider } from './context/AuthContext'
import ContactsPage from './pages/ContactsPage'
import Login from './pages/auth/Login'
import SignUp from './pages/auth/SignUp'
import Account from './pages/auth/Account'
import ProtectedRoutes from './utils/ProtectedRoutes'
import ScrollToTop from './utils/ScrollToTop'
import { CatalogProvider } from './context/CatalogContext'
import Layout from './components/Layout/Layout'
import ItemDetail from './components/CatalogCard/itemDetail'
import CartProvider from './context/CartContext'
import BlogPage from './pages/BlogPage/BlogPage'
import BlogDetail from './components/Blog/BlogDetail'

const App = () => {
  return (
    <AuthContextProvider>
      <CartProvider>
        <CatalogProvider>
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="blog" element={<BlogPage />} />
                <Route path="blog/post/:blogId" element={<BlogDetail />} />
                <Route path="catalog" element={<Catalog />} />
                <Route path="catalog/:itemId" element={<ItemDetail />} />
                <Route path="contacts" element={<ContactsPage />} />
                <Route path="cart" element={<CartPage />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
              </Route>
              <Route
                path="/account"
                element={
                  <ProtectedRoutes>
                    <Account />
                  </ProtectedRoutes>
                }
              />
            </Routes>
          </BrowserRouter>
        </CatalogProvider>
      </CartProvider>
    </AuthContextProvider>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)
