import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import UTIList from '@/components/UTIs/UTIList'
import utis from '@/components/UTIs/__tests__/__mocks__/utis'
import UTIService from '@/services/UTIService'
import flushPromises from 'flush-promises'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

describe('HospitalList.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(UTIList, {
      localVue,
      router
    })
  })

  it('component is rendering properly', () => {
    wrapper.setData({ utis: utis.data })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('UTIService get should be called on created lifecycle hook', async () => {
    UTIService.get = jest.fn(() => Promise.resolve(utis))
    wrapper = shallowMount(UTIList, { localVue, router })
    await flushPromises()
    expect(wrapper.vm.utis).toBe(utis.data)
  })
})
