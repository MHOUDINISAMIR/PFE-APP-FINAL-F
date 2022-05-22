import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'
import AddUser from './pages/AddUser'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Profile from './pages/Profile'
import Users from './pages/Users'
import SingleUser from './pages/SingleUser';
import PrivateAdminRoute from './components/PrivateAdminRoute';
import UpdateUser from './pages/UpdateUser'

function App() {
  return (
    <>
      <Router>
        <div className='main-app-container'>
          <Header />
          <Routes>
            <Route path='*' element={<NotFound />} />
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            {/* Profile */}
            <Route path='/profile' element={<PrivateRoute />}>
              <Route path='/profile' element={<Profile />} />
            </Route>
            {/* Add User */}
            <Route path='/add-user' element={<PrivateAdminRoute />}>
              <Route path='/add-user' element={<AddUser />} />
            </Route>
              {/* Users */}
            <Route path='/users' element={<PrivateAdminRoute />}>
              <Route path='/users' element={<Users />} />
            </Route>
            {/* update user */}
            <Route path='/user/update/:userId' element={<PrivateAdminRoute />}>
              <Route path='/user/update/:userId' element={<UpdateUser />} />
            </Route>
            {/* singleUser */}
            <Route path='/user/:userId' element={<PrivateAdminRoute />}>
              <Route path='/user/:userId' element={<SingleUser />} />
            </Route>
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App