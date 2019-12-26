import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Register from '@/components/pacient/Register'
import VueTheMask from 'vue-the-mask'
import Vuelidate from 'vuelidate'
import PacientService from '@/services/PacientService'
import pacient from '@/components/pacient/__tests__/__mocks__/pacient'

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

  it('click button should call submit method', () => {
    const submit = jest.fn()
    wrapper.setMethods({ submit })
    wrapper.find('form').trigger('submit')
    expect(submit).toHaveBeenCalled()
  })

  it('mandatory form fields', () => {
    const errors = wrapper.findAll('.error--message')
    expect(errors.at(0).text()).toBe('Campo obrigatório')
    expect(errors.at(1).text()).toBe('Campo obrigatório')
    expect(errors.at(2).text()).toBe('Campo obrigatório')
    expect(errors.at(3).text()).toBe('Campo obrigatório')
  })

  it('feedback form validation', () => {
    const data = pacient.invalidData
    wrapper.setData({ pacient: data })
    wrapper.vm.$forceUpdate()
    const errors = wrapper.findAll('.error--message')
    expect(errors.at(0).text()).toBe('Campo obrigatório')
    expect(errors.at(1).text()).toBe('CPF inválido')
    expect(errors.at(2).text()).toBe('Email inválido')
    expect(errors.at(3).text()).toBe('Data inválida')
  })

  it('form should be valid', () => {
    const data = pacient.validData
    wrapper.setData({ pacient: data })
    wrapper.vm.$forceUpdate()
    expect(wrapper.findAll('.error--message').length).toBe(0)
  })

  it('PacientService post method should NOT be called on submit if form is INVALID', () => {
    const data = pacient.invalidData
    wrapper.setData({ pacient: data })
    const serviceSpy = jest.spyOn(PacientService, 'post')
    wrapper.vm.submit()
    expect(serviceSpy).toBeCalledTimes(0)
  })

  it('PacientService post method should NOT be called on submit if form is VALID', () => {
    const data = pacient.validData
    wrapper.setData({ pacient: data })
    const serviceSpy = jest.spyOn(PacientService, 'post')
    wrapper.vm.submit()
    expect(serviceSpy).toHaveBeenCalled()
  })
})