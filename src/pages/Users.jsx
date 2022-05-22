import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { deleteUser, getUsers ,reset } from '../features/user/userSlice'

import '../style/usersPage.css'

const Users = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const {users, isLoading, isSuccess, deleteUserSuccess, isError, message} = useSelector((state) => state.user)

   useEffect(() => {
      dispatch(getUsers())
      if(deleteUserSuccess){
         dispatch(reset())
         dispatch(getUsers())
       }
   }, [dispatch, isSuccess, deleteUserSuccess])

   const handleViewUser = (userId) => {
      dispatch(reset())
      navigate(`/user/${userId}`)
    }
  
    const handleUpdateUser = (userId) => {
      dispatch(reset())
      navigate(`/user/update/${userId}`)
    }
  
    const handleDeleteUser = (userId) => {
      dispatch(deleteUser(userId))
      dispatch(getUsers())
    }

  return (
   <section className='users-section'>
   <div className='user-main_container'>
     <div className='user-container'>
       <h1>Lists of Employees</h1>
       {isLoading ? (
         <p>Loading ...</p>
       ) : isError ? (
         <p>{message}</p>
       ) : 
         isSuccess && (
           <div className='user-content'>
             <table>
               <tr>
                 <th>IMAGE</th>
                 <th>NAME</th>
                 <th>PHONE</th>
                 <th>SEXE</th>
                 <th>POSTE</th>
                 <th>EMAIL</th>
                 <th>VISUALIZATION</th>
                 <th>MODIFICATION</th>
                 <th>DELETION</th>
               </tr>
               {users.users.map((user) => (
                 <tr>
                   <td><img className='img-user' src={user.imageUrl} alt={user.name}  /></td>
                   <td>{user.name}</td>
                   <td>{user.num}</td>
                   <td>{user.sexe}</td>
                   <td>{user.poste}</td>
                   <td>{user.email}</td>
                   <td>
                     <button
                     className='btn-view'
                     onClick={() => {
                        handleViewUser(user._id)
                      }}
                     >
                       View User
                     </button>
                   </td>
                   <td>
                     <button
                     className='btn-update'
                     onClick={() => {
                        handleUpdateUser(user._id)
                      }}
                     >
                       Update User
                     </button>
                   </td>
                   <td>
                     <button className='btn-delete'
                     onClick={() => handleDeleteUser(user._id)}>
                       DELETE USER
                     </button>
                   </td>
                 </tr>
               ))}
             </table>
           </div>
         )
       }
     </div>
   </div>
 </section>
  )
}

export default Users