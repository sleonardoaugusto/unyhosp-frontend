import apiClient from '@/services/config'
import UTIService from '@/services/UTIService'
import utis from '@/services/__tests__/__mocks__/utis'

describe('UTIService.js', () => {
  it('UTIService get method should get /utis/ resource', () => {
    const spy = jest.spyOn(apiClient, 'get')
    UTIService.get()
    expect(spy).toHaveBeenCalledWith('/utis/')
  })

  it('UTIService post method should post /utis/ resource with data', () => {
    const data = utis
    const spy = jest.spyOn(apiClient, 'post')
    UTIService.post(data)
    expect(spy).toHaveBeenCalledWith('/utis/', data)
  })
})