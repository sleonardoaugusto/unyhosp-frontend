import apiClient from './config'

export default {
  get() {
    return apiClient.get('/hospitals/')
  },
  post(data) {
    return apiClient.post('/hospitals/', data)
  }
}