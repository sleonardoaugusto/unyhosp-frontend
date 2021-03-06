import axios from 'axios'
import index from '@/store'

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_SERVICE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

apiClient.interceptors.response.use((response) => {
  const method = response.config.method
  if (method == 'post') {
    const message = 'Operação realizada com sucesso!'
    index.dispatch('notification/add', { message: message, type: 'success' }, { root: true })
  }
  return response
}, error => {
  const message = 'Houve um problema na comunicação com o servidor, contate seu Administrador.'
  index.dispatch('notification/add', { message: message, type: 'error' }, { root: true })
})

export default apiClient