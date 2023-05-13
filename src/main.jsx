import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import UpdateChocolate from './components/UpdateChocolate.jsx'
import AddChocolate from './components/AddChocolate.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: 'addChocolate',
    element: <AddChocolate />
  },
  {
    path: 'updateChocolate',
    element: <UpdateChocolate />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
