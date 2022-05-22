import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, reset } from './../features/user/userSlice';

import '../style/singUserPage.css'

const SingleUser = () => {
   const {userId} = useParams()
   const dispatch = useDispatch()
   const { user, isLoading, singleUserSuccess, isError, message } = useSelector(
      (state) => state.user
   )

   useEffect(() => {
      dispatch(getUser(userId))
   }, [dispatch, userId])

  return (
      <section className='singleuser-section'>
         {isLoading ? (
         <p>Loading ...</p>
         ) : (
            singleUserSuccess && (
               <div className='singleuser-container'>
                  <div className="singleuser-content">
                     <img className='img-singleuser' src={user.user.imageUrl} alt={user.user.name} />
                     <p> NAME : <span>{user.user.name}</span></p> 
                     <p> PHONE : <span>{user.user.num}</span></p> 
                     <p> SEXE : <span>{user.user.sexe}</span></p> 
                     <p> POSTE : <span>{user.user.poste}</span></p> 
                     <p> EMAIL : <span>{user.user.email}</span></p> 
                  </div>
               </div>
            )
         )}
      </section>
   )
}

export default SingleUser