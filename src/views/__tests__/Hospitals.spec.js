import { shallowMount } from '@vue/test-utils'
import Hospitals from '@/views/Hospitals'
import HospitalList from '@/components/HospitalList'

describe('Hospitals.vue', () => {
  let wrapper

  wrapper = shallowMount(Hospitals)

  it('renders component properly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders child component', () => {
    expect(wrapper.find(HospitalList)).toBeTruthy()
  })
})