import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStatus } from '../hooks/useAuthStatus'


const PrivateRoute = () => {
    const {loggedIn, checkLoggedIn } = useAuthStatus()
  
    if(checkLoggedIn) {
        return <p>checking ....</p>
    }

    return loggedIn ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoute