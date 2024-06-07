import axios from 'axios'


const api =  axios.create({
    // baseURL: 'http://localhost:3333'
    baseURL: 'https://projetobackend-aas8.onrender.com'
})

export default api