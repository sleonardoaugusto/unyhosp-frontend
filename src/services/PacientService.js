import apiClient from './config'

export default {
  get() {
    return apiClient.get('/pacients/')
  },
  getByName(name) {
    return apiClient.get(`/pacients/?name=${name}`)
  },
  post(data) {
    return apiClient.post('/pacients/', data)
  }
}