import { shallowMount, createLocalVue } from '@vue/test-utils'
import Hospitals from '@/views/Hospitals'
import HospitalList from '@/components/hospitals/HospitalList'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

describe('Hospitals.vue', () => {
  let wrapper

  wrapper = shallowMount(Hospitals, {
    localVue,
    router
  })

  it('renders component properly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders child component', () => {
    expect(wrapper.find(HospitalList)).toBeTruthy()
  })
})