import apiClient from './config'

export default {
  getPacients() {
    return apiClient.get('/pacients/')
  },

  postPacient(data) {
    return apiClient.post('/pacients/', data)
  }
}