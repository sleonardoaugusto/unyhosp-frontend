import apiClient from './config'

export default {
  getUsers() {
    return apiClient.get('/users/')
  }
}