import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuthAdminStatus } from '../hooks/useAuthAdminStatus'

const PrivateAdminRoute = () => {
   const {loggedIn, checkLoggedIn } = useAuthAdminStatus()
  
   if(checkLoggedIn) {
       return <p>checking ....</p>
   }

   return loggedIn ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateAdminRoute