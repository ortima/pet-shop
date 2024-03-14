import * as React from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '*',
    element: <div>Not Found</div>,
  },
  {
    path: '/catalog',
    element: <div>Catalog</div>,
  },
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
