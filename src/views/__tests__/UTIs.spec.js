import { shallowMount } from '@vue/test-utils'
import UTIs from '@/views/UTIs'
import UTIList from '@/components/UTIs/UTIList'

describe('UTIs.vue', () => {
  let wrapper

  wrapper = shallowMount(UTIs)

  it('renders component properly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders child component', () => {
    expect(wrapper.find(UTIList)).toBeTruthy()
  })
})