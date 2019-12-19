import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import BedList from '@/components/BedList'
import BedCard from '@/components/BedCard'
import beds from '@/components/__tests__/__mocks__/beds'

const localVue = createLocalVue()
localVue.use(VueRouter)

describe('HospitalList.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(BedList, {
      localVue
    })
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

  it('renders child component if bed data is not empty', () => {
    wrapper.setData({ beds: beds.data })
    const bedcard = wrapper.find(BedCard)
    expect(bedcard.exists()).toBeTruthy()
  })
})