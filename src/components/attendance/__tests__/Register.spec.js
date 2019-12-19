import { shallowMount } from '@vue/test-utils'
import Register from '@/components/attendance/Register'

describe('Register.vue', () => {
  let wrapper
  const getPacients = jest.fn()

  wrapper = shallowMount(Register, {
    methods: {
      getPacients
    }
  })

  it('component is rendering properly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should get pacients when interact with pacient field', () => {
    wrapper.find('input').trigger('input')
    expect(getPacients).toHaveBeenCalled()
  })
})