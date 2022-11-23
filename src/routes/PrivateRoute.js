import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import LoadingSpinner from '../components/LoadingSpinner'
import { AuthContext } from '../contexts/UserContext'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation()
  console.log(loading)
  if (loading) {
    return <LoadingSpinner />
  }

  if (user && user.uid) {
    return children
  }
  return <Navigate to='/login' state={{ from: location }} replace />
}

export default PrivateRoute
