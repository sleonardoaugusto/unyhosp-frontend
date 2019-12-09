import { shallowMount } from '@vue/test-utils'
import HospitalList from '@/components/HospitalList'
import hospitals from '@/components/__tests__/__mocks__/hospitals'

describe('HospitalList.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(HospitalList)
  })

  it('component is rendering properly', () => {
    wrapper.setData({ hospitals: hospitals.data })
    expect(wrapper.html()).toMatchSnapshot()
  })
})