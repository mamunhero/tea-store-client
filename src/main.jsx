import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Route from './Route/Route.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Components/Provider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
        <RouterProvider router={Route} />
     </AuthProvider>
  </React.StrictMode>,
)
