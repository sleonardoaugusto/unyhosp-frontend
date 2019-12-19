import { shallowMount } from '@vue/test-utils'
import Register from '@/components/attendance/Register'

describe('Register.vue', () => {
  let wrapper

  wrapper = shallowMount(Register)

  it('component is rendering properly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})