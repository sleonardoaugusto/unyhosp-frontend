import apiClient from './config'

export default {
  get() {
    return apiClient.get('/utis/')
  },
  post(data) {
    return apiClient.post('/utis/', data)
  }
}