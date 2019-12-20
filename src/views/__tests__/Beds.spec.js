import { shallowMount } from '@vue/test-utils'
import Beds from '@/views/Beds'
import BedList from '@/components/beds/BedList'

describe('Beds.vue', () => {
  let wrapper

  wrapper = shallowMount(Beds)

  it('renders component properly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders child component', () => {
    expect(wrapper.find(BedList)).toBeTruthy()
  })
})