import { shallowMount } from '@vue/test-utils'
import AttendanceEdit from '@/components/attendance/AttendanceEdit'

describe('AttendanceEdit.vue', () => {
  let wrapper

  wrapper = shallowMount(AttendanceEdit)

  it('component is rendering properly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})