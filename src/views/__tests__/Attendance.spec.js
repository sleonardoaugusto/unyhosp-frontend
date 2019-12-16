import { shallowMount } from '@vue/test-utils'
import Pacient from '@/views/Attendance'

describe('Attendance.vue', () => {
  let wrapper

  wrapper = shallowMount(Pacient)

  it('renders component properly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})