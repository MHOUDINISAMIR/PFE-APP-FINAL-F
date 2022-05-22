import axios from 'axios'

//login

const login = async (userData) => {
    const response = await axios.post('http://localhost:5000/api/user/login', userData)
    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

//logout

const logout = () => localStorage.removeItem('user')

const authService = {
    login,
    logout
}

export default authService