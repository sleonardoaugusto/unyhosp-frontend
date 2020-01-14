import apiClient from '@/services/config'
import PacientService from '@/services/PacientService'
import pacient from '@/services/__tests__/__mocks__/pacient'

describe('PacientService.js', () => {
  it('PacientService get method should get /pacients/ resource', () => {
    const spy = jest.spyOn(apiClient, 'get')
    PacientService.get()
    expect(spy).toHaveBeenCalledWith('/pacients/')
  })

  it('PacientService post method should post /pacients/ resource with data', () => {
    const data = pacient
    const spy = jest.spyOn(apiClient, 'post')
    PacientService.post(data)
    expect(spy).toHaveBeenCalledWith('/pacients/', data)
  })
})