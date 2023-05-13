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
    element: <App />,
    loader: () => fetch('http://localhost:5000/chocolates')
  },
  {
    path: 'addChocolate',
    element: <AddChocolate />
  },
  {
    path: 'updateChocolate/:id',
    element: <UpdateChocolate />,
    loader: ({ params }) => fetch(`http://localhost:5000/chocolates/${params.id}`)
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
