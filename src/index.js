import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import UserContext from './contexts/UserContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const root = ReactDOM.createRoot(document.getElementById('root'))
const queryClient = new QueryClient()
root.render(
  <QueryClientProvider  client={queryClient}>
    <UserContext>
    <ToastContainer position='top-center' />
    <App />
  </UserContext>
  </QueryClientProvider>
)

{/* <QueryClientProvider client={queryClient}>
   <UserContext>
    <ToastContainer position='top-center' />
    <App />
  </UserContext>
 </QueryClientProvider> */}