import { shallowMount, createLocalVue } from '@vue/test-utils'
import UTIs from '@/views/UTIs'
import UTIList from '@/components/UTIs/UTIList'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

describe('UTIs.vue', () => {
  let wrapper

  wrapper = shallowMount(UTIs, {
    localVue,
    router
  })

  it('renders component properly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders child component', () => {
    expect(wrapper.find(UTIList)).toBeTruthy()
  })
})