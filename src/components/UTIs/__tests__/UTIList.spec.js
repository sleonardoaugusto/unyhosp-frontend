import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import UTIList from '@/components/UTIs/UTIList'
import utis from '@/components/UTIs/__tests__/__mocks__/utis'
import UTIService from '@/services/UTIService'

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

  it('UTIService get should be called on created lifecycle hook', () => {
    const spy = jest.spyOn(UTIService, 'get')
    wrapper = mount(UTIList, { localVue, router })
    expect(spy).toHaveBeenCalled()
  })
})
