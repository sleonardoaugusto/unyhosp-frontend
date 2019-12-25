import apiClient from './config'

export default {
  get() {
    return apiClient.get('/attendances/')
  },
  post(data) {
    return apiClient.post('/attendances/', data)
  }
}