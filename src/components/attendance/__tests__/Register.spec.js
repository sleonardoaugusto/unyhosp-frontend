import { shallowMount } from '@vue/test-utils'
import Register from '@/components/attendance/Register'

describe('Register.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Register)
  })

  it('component is rendering properly', () => {
    wrapper.setData({ pacients: [{ name: 'Paul Green' }] })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should call searchPacients method when interact with pacient field', () => {
    const searchPacients = jest.fn()
    wrapper.setMethods({ searchPacients })
    wrapper.find('input').trigger('input')
    expect(searchPacients).toHaveBeenCalled()
  })

  it('dropdown should appear at searchPacients method trigger', () => {
    expect(wrapper.find('.live-search__dropdown').isVisible()).toBeFalsy()
    wrapper.vm.searchPacients()
    expect(wrapper.find('.live-search__dropdown').isVisible()).toBeTruthy()
  })

  it('call setData method when interact with live search items', () => {
    const setPacient = jest.fn()
    wrapper.setMethods({ setPacient })
    wrapper.setData({ pacients: [{ name: 'Mariazinha' }] })
    wrapper.find('.live-search__item').trigger('click')
    expect(setPacient).toHaveBeenCalled()
  })

  it('setPacient method must set a new inputValue', () => {
    const data = { name: 'Maria Joaquina Almeida' }
    wrapper.vm.setPacient(data)
    expect(wrapper.vm.inputValue).toBe(data.name)
  })
})