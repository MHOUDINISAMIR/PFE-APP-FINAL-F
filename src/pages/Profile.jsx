import React from 'react'
import { useSelector } from 'react-redux'

import '../style/profilePage.css'

const Profile = () => {
  const {user} = useSelector(state => state.auth)
  return (
    <section className="profile-section">
      <div className='profile-container'>
        <div className="profile-content">
        <img className='img-profile' src={user.info.imageUrl} alt={user.info.name} />
        <p> NAME : <span>{user.info.name}</span></p> 
          <p> PHONE : <span>{user.info.num}</span></p> 
          <p> SEXE : <span>{user.info.sexe}</span></p> 
          <p> POSTE : <span>{user.info.poste}</span></p> 
          <p> EMAIL : <span>{user.info.email}</span></p>
        </div>
      </div>
      
    </section>
  )
}

export default Profile