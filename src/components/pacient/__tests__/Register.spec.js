import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Register from '@/components/pacient/Register'
import VueTheMask from 'vue-the-mask'
import Vuelidate from 'vuelidate'

const localVue = createLocalVue()
localVue.use(VueRouter)
localVue.use(VueTheMask)
localVue.use(Vuelidate)

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
    const submit = jest.fn()
    wrapper.setMethods({ submit })
    wrapper.find('form').trigger('submit')
    expect(submit).toHaveBeenCalled()
  })

  it('PacientService post method should be called', () => {
    const PacientService = { post: jest.fn() }
    const submit = jest.fn(PacientService.post)
    wrapper.setMethods({ submit })
    wrapper.find('#PacientName').setValue('Abraão Brickman')
    wrapper.find('#DocumentId').setValue('45009877899')
    wrapper.find('#Email').setValue('abraao.brickman@gmail.com')
    wrapper.find('#DateOfBirth').setValue('06/08/1995')
    wrapper.find('form').trigger('submit')
    expect(PacientService.post).toHaveBeenCalled()
  })
})