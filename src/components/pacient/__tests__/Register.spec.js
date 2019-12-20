import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Register from '@/components/pacient/Register'

const localVue = createLocalVue()
localVue.use(VueRouter)

describe('Pacient/Register.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Register, {
      localVue
    })
  })

  it('component is rendering properly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})