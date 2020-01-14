import apiClient from './config'

export default {
  get() {
    return apiClient.get('/beds/')
  },
  post(data) {
    return apiClient.post('/beds/', data)
  }
}