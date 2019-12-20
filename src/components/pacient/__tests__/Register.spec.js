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

  it('click button must call registerPacient method', () => {
    const registerPacient = jest.fn()
    wrapper.setMethods({ registerPacient })
    wrapper.find('.button').trigger('click')
    expect(registerPacient).toHaveBeenCalled()
  })
})