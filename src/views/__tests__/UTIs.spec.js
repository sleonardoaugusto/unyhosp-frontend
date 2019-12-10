import { shallowMount } from '@vue/test-utils'
import UTIs from '@/views/UTIs'
import BedList from '@/components/BedList'

describe('UTIs.vue', () => {
  let wrapper

  wrapper = shallowMount(UTIs)

  it('renders component properly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders child component', () => {
    expect(wrapper.find(BedList)).toBeTruthy()
  })
})