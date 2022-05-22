import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import '../style/addUserPage.css'
import { addUser, reset } from './../features/user/userSlice';

const AddUser = () => {
   const [formData, setFormData] = useState({
      name: '', 
      num: '', 
      sexe: '',
      poste: '', 
      email: '', 
      password: '', 
      imageUrl: ''
   })

   const {name, num, sexe,poste, email, password, imageUrl} = formData
   const dispatch  = useDispatch()
   const navigate = useNavigate()
   const {user} = useSelector(state => state.auth)
   const {isLoading, addUserSuccess, isError, message} = useSelector(state => state.user)

   useEffect(()=> {
      dispatch(reset())
      if(addUserSuccess){
         dispatch(reset())
         navigate('/users')
      }
   }, [dispatch, addUserSuccess, isError, navigate, message])

   const onChange = (event) => {
      setFormData((prevState) => ({
          ...prevState,
          [event.target.name]: event.target.value
      }))
  }

   const onSubmit = (event) => {
      event.preventDefault()
      const userData = {name, num, sexe,poste, email, password, imageUrl, userId: user.id}
      dispatch(addUser(userData))
    }
  return (
      <section className='adduser-section'>
      <div className='adduser-main_container'>
         <div className='adduser-top_container'>
            <h1>Added a new User</h1>
         </div>
         <div className='adduser-bottom_container'>
            <form onSubmit={onSubmit} className='form-container'>
               <input
               type='text'
               className='form-input'
               name='name'
               value={name}
               placeholder='name'
               onChange={onChange}
               />
               <input
               type='text'
               className='form-input'
               name='num'
               value={num}
               placeholder='Phone Number'
               onChange={onChange}
               />
               <input
               type='text'
               className='form-input'
               name='sexe'
               value={sexe}
               placeholder='Your sexe'
               onChange={onChange}
               />
               <input
               type='text'
               className='form-input'
               name='poste'
               value={poste}
               placeholder='Your Poste'
               onChange={onChange}
               /> 
               <input
               type='text'
               className='form-input'
               name='imageUrl'
               value={imageUrl}
               placeholder='imageUrl'
               onChange={onChange}
               />
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
               <button className='btn-form'>Add-User</button>
            </form>

         </div>
      </div>
      </section>
   )
}

export default AddUser