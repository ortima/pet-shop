import * as React from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Catalog from './pages/Catalog'
import CartPage from './pages/CartPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
  {
    path: 'catalog',
    element: <Catalog />,
  },
  {
    path: 'blog',
    element: <div>Blog</div>,
  },
  {
    path: 'contacts',
    element: <div>Contacts</div>,
  },
  {
    path: 'cart',
    element: <CartPage />,
  },
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
