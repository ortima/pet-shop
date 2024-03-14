import * as React from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom'
import NotFound from './pages/NotFound'
import Catalog from './pages/Catalog'

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
    path: '/catalog',
    element: <Catalog />,
  },
  {
    path: '/blog',
    element: <div>Blog</div>,
  },
  {
    path: '/contacts',
    element: <div>Contacts</div>,
  },
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
