import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

apiClient.interceptors.response.use((response) => {
  // console.log(response)
}, error => {
  // console.log(error.response)
})

export default apiClient