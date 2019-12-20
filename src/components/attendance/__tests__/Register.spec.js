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

  it('should get pacients when interact with pacient field', () => {
    const getPacients = jest.fn()
    wrapper.setMethods({ getPacients })
    wrapper.find('input').trigger('input')
    expect(getPacients).toHaveBeenCalled()
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