import apiClient from '@/services/config'
import HospitalService from '@/services/HospitalService'
import attendance from '@/services/__tests__/__mocks__/attendance'

describe('HospitalService.js', () => {
  it('HospitalService get method should get /attendances/ resource', () => {
    const spy = jest.spyOn(apiClient, 'get')
    HospitalService.get()
    expect(spy).toHaveBeenCalledWith('/hospitals/')
  })

  it('HospitalService post method should post /attendances/ resouce with data', () => {
    const data = attendance
    const spy = jest.spyOn(apiClient, 'post')
    HospitalService.post(data)
    expect(spy).toHaveBeenCalledWith('/hospitals/', data)
  })
})