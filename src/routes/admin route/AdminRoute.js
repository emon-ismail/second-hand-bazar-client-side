import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import LoadingSpinner from '../../components/LoadingSpinner'
import { AuthContext } from '../../contexts/UserContext'
import useAdmin from '../../layout/Dashboardlayout/Allusers/UseAdmin'
// import LoadingSpinner from '../components/LoadingSpinner'
// import { AuthContext } from '../contexts/UserContext'

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const [isAdmin]=useAdmin(user?.email)
  const location = useLocation()
  console.log(loading)
  if (loading) {
    return <LoadingSpinner />
  }

  if (user  && isAdmin) {
    return children
  }
  return <Navigate to='/login' state={{ from: location }} replace />
}

export default AdminRoute 