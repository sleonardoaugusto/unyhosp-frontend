import apiClient from './config'

export default {
  getPacients() {
    return apiClient.get('/pacients/')
  }
}