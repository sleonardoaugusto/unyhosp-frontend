import { shallowMount, createLocalVue } from '@vue/test-utils'
import Beds from '@/views/Beds'
import BedList from '@/components/beds/BedList'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

describe('Beds.vue', () => {
  let wrapper

  wrapper = shallowMount(Beds, {
    localVue,
    router
  })

  it('renders component properly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders child component', () => {
    expect(wrapper.find(BedList)).toBeTruthy()
  })
})