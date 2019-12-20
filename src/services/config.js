import axios from 'axios'
import index from '@/store'

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
  const message = 'Houve um problema com o servidor, favor contatar seu administrador'
  index.dispatch('notification/add', { message: message }, { root: true })
})

export default apiClient