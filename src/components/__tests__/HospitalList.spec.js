import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import HospitalList from '@/components/HospitalList'
import hospitals from '@/components/__tests__/__mocks__/hospitals'

const localVue = createLocalVue()
localVue.use(VueRouter)

describe('HospitalList.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(HospitalList, {
      localVue
    })
  })

  it('component is rendering properly', () => {
    wrapper.setData({ hospitals: hospitals.data })
    expect(wrapper.html()).toMatchSnapshot()
  })
})