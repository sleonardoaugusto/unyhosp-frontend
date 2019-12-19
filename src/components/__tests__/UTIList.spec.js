import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import UTIList from '@/components/UTIList'
import utis from '@/components/__tests__/__mocks__/utis'

const localVue = createLocalVue()
localVue.use(VueRouter)

const routes = [{ path: '/utis', component: UTIList }]
const router = new VueRouter({
  routes
})

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
})
