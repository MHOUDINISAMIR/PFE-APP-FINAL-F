import axios from "axios";

// add user
const addUser = async (user, token) => {
   const config = {
      headers: {
          Authorization: `Bearer ${token}`
      }
  }

  const response = await axios.post('http://localhost:5000/api/user/add-user', user, config)

  return response.data
}

//get User
const getUsers = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    
    const response = await axios.get('http://localhost:5000/api/user/users', config)

    return response.data
}

const getUser = async (userId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(`http://localhost:5000/api/user/${userId}`, config)

    return response.data
}

const upadateUser = async (user, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.put(`http://localhost:5000/api/user/update/${user.userId}`, user, config)

    return response.data
}

const deleteUser = async(userId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.delete(`http://localhost:5000/api/user/delete/${userId}`, config)

    return response.data
}


const userService = {addUser, getUsers, deleteUser, getUser, upadateUser}
export default userService