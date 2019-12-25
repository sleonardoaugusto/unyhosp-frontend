import apiClient from '@/services/config'
import AttendanceService from '@/services/AttendanceService'
import attendance from '@/services/__tests__/__mocks__/attendance'

describe('AttendanceService.js', () => {
  it('AttendanceService get method should get /attendances/ resource', () => {
    const spy = jest.spyOn(apiClient, 'get')
    AttendanceService.get()
    expect(spy).toHaveBeenCalledWith('/attendances/')
  })

  it('AttendanceService post method should post /attendances/ resouce with data', () => {
    const data = attendance
    const spy = jest.spyOn(apiClient, 'post')
    AttendanceService.post(data)
    expect(spy).toHaveBeenCalledWith('/attendances/', data)
  })
})