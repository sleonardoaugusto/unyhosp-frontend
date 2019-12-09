import { shallowMount } from '@vue/test-utils'
import BedList from '@/components/BedList'
import BedCard from '@/components/BedCard'
import beds from '@/components/__tests__/__mocks__/beds'

describe('HospitalList.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(BedList)
  })

  it('component is rendering properly', () => {
    wrapper.setData({ beds: beds.data })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('not render child component if bed data is empty', () => {
    wrapper.setData({ beds: [] })
    const bedcard = wrapper.find(BedCard)
    expect(bedcard.exists()).toBeFalsy()
  })

  it('not render child component if bed data is empty', () => {
    wrapper.setData({ beds: beds.data })
    const bedcard = wrapper.find(BedCard)
    expect(bedcard.exists()).toBeTruthy()
  })
})