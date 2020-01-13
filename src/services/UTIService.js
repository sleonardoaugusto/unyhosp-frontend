import apiClient from './config'

export default {
  get() {
    return apiClient.get('/utis/')
  },
  getByHospitalId(id) {
    return apiClient.get(`/utis/?hospital_id=${id}`)
  },
  post(data) {
    return apiClient.post('/utis/', data)
  }
}