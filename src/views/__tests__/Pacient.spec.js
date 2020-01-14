import { shallowMount, createLocalVue } from '@vue/test-utils'
import Pacient from '@/views/Pacient'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(VueRouter)

describe('Pacient.vue', () => {
  let wrapper

  wrapper = shallowMount(Pacient, {
    localVue
  })

  it('renders component properly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})