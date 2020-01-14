import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import BedList from '@/components/beds/BedList'
import BedCard from '@/components/beds/BedCard'
import beds from '@/components/beds/__tests__/__mocks__/beds'
import Bedservice from '@/services/Bedservice'
import flushPromises from 'flush-promises'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

describe('BedList.vue', () => {
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

  it('BedService get service method should be called on created lifecycle hook', async () => {
    Bedservice.get = jest.fn(() => Promise.resolve(beds))
    wrapper = shallowMount(BedList, { localVue, router })
    await flushPromises()
    expect(wrapper.vm.beds).toBe(beds.data)
  })
})