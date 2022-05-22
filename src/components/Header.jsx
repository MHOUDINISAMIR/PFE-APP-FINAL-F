import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout, reset } from '../features/auth/authSlice'

import '../style/index.css'

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)

  const handleLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/login')
  }
  return (
    <header className='main-header'>
      <p className='logo'>
        <Link  to='/'>
          <img className='img-logo' src="/images/logo color polfid white withoutback.png" alt="logo" />
        </Link>
      </p>
      <nav>
        <ul className='menu-container'>
        {user && user.isAdmin &&(
              <>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/add-user'>Add User</Link>
                </li>
                <li>
                  <Link to='/users'>Users</Link>
                </li>
              </> 
            )
          }
          { user ? (
              <>
                <li>
                  <Link to='/profile'>Profile</Link>
                </li>
                <li className='menu-logout' onClick={handleLogout}>Logout</li>
              </> 
            ) : (
              <>
                <li>
                    <Link to='/Login'>Login</Link>
                </li>
              </>
            )  
          }
          
        </ul>
      </nav>
    </header>
  )
}

export default Header
