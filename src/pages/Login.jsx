import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { login, reset } from '../features/auth/authSlice'

import '../style/loginPage.css'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const {email, password} = formData

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)

  useEffect(() =>{
    if(isError){
      console.log(message)
    }

    if(isSuccess && user){
      navigate('/')
      dispatch(reset())
    }
  }, [dispatch, isError, isSuccess, user, message, navigate])

  const onChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const userData = {email, password}
    dispatch(login(userData))
  }
  return (
    <section className='login-section'>
      <div className='login-main_container'>
        <div className='login-top_container'>
          <h1>Login to your account</h1>
        </div>
        <div className='login-bottom_container'>
          <form onSubmit={onSubmit} className='form-container'>
            <input
              type='email'
              className='form-input'
              name='email'
              value={email}
              placeholder='Email'
              onChange={onChange}
            />
            <input
              type='password'
              className='form-input'
              name='password'
              value={password}
              placeholder='Password'
              onChange={onChange}
            />
            <button className='btn-form'>Login</button>
          </form>
          {isError && (<p className='error-message_form'>{message}</p>)}
        </div>
      </div>
    </section>
  )
}

export default Login
