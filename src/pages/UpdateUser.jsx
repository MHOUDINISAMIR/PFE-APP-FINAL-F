import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, updateUser, reset } from './../features/user/userSlice';

import '../style/updateUserPage.css'

const UpdateUser = () => {
   const { userId } = useParams()
   const [formData, setFormData] = useState({
      name: '', 
      num: '', 
      sexe: '',
      poste: '', 
      email: '', 
      password: '', 
      imageUrl: ''
   })
   const { name, num, sexe,poste, email, password, imageUrl } = formData
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const { user, isLoading, singleUserSuccess, updateUserSuccess, isError, messsage } = useSelector((state) => state.user)

   useEffect(() => {
      dispatch(getUser(userId))
      if(updateUserSuccess){
         dispatch(reset())
         navigate('/users')
      }
   }, [dispatch, isError, singleUserSuccess, updateUserSuccess, navigate, messsage, userId])

   const onChange = (event) => {
      setFormData((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value,
      }))
    }

   const onSubmit = (event) => {
      event.preventDefault()
      const userData = {
        name: name || user.user.name,
        num: num || user.user.num,
        sexe: sexe || user.user.sexe,
        poste: poste || user.user.poste,
        email: email || user.user.email,
        password: password || user.user.password,
        imageUrl: imageUrl || user.user.imageUrl,
        userId: userId,
      }
      dispatch(updateUser(userData))
    }

  return (
      <section className='updateuser-section'>
         {isLoading ? (
         <p>loading ...</p>
         ) : singleUserSuccess && (
         <div className='updateuser-main_container'>
            <div className='updateuser-top_container'>
               <h1>Update User</h1>
            </div>
            <div className='updateuser-bottom_container'>
               <form onSubmit={onSubmit} className='form-container'>
               <input
                  type='text'
                  className='form-input'
                  name='name'
                  placeholder={user.user.name}
                  onChange={onChange}
               />
               <input
                  type='text'
                  className='form-input'
                  name='num'
                  placeholder={user.user.num}
                  onChange={onChange}
               />
               <input
                  type='text'
                  className='form-input'
                  name='sexe'
                  placeholder={user.user.sexe}
                  onChange={onChange}
               />
               <input
                  type='text'
                  className='form-input'
                  name='poste'
                  placeholder={user.user.poste}
                  onChange={onChange}
               />
               <input
                  type='text'
                  className='form-input'
                  name='imageUrl'
                  placeholder={user.user.imageUrl}
                  onChange={onChange}
               />
               <input
                  type='email'
                  className='form-input'
                  name='email'
                  placeholder={user.user.email}
                  onChange={onChange}
               />
               <input
                  type='password'
                  className='form-input'
                  name='password'
                  placeholder='New Password'
                  onChange={onChange}
               />
               <button className='btn-form'>Update User</button>
               </form>
            </div>
         </div>
         )}
      </section>
   )
}

export default UpdateUser