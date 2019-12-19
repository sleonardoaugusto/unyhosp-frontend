import { shallowMount } from '@vue/test-utils'
import Edit from '@/components/attendance/Edit'

describe('Register.vue', () => {
  let wrapper

  wrapper = shallowMount(Edit)

  it('component is rendering properly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})