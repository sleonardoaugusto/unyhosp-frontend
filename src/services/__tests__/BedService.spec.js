import apiClient from '@/services/config'
import BedService from '@/services/Bedservice'
import beds from '@/services/__tests__/__mocks__/beds'

describe('BedService.js', () => {
  it('BedService get method should get /beds/ resource', () => {
    const spy = jest.spyOn(apiClient, 'get')
    BedService.get()
    expect(spy).toHaveBeenCalledWith('/beds/')
  })

  it('BedService post method should post /beds/ resource with data', () => {
    const data = beds
    const spy = jest.spyOn(apiClient, 'post')
    BedService.post(data)
    expect(spy).toHaveBeenCalledWith('/beds/', data)
  })
})