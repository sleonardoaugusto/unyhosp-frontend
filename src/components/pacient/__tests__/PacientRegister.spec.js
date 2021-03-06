import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import PacientRegister from '@/components/pacient/PacientRegister'
import VueTheMask from 'vue-the-mask'
import Vuelidate from 'vuelidate'
import PacientService from '@/services/PacientService'
import pacient from '@/components/pacient/__tests__/__mocks__/pacient'

const localVue = createLocalVue()

localVue.use(VueRouter)
localVue.use(VueTheMask)
localVue.use(Vuelidate)

describe('PacientRegister.vue', () => {
  let wrapper

  beforeEach(() => {

    wrapper = shallowMount(PacientRegister, {
      localVue
    })
  })

  it('component is rendering properly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('feedback form validation should appear', () => {
    wrapper.setData({ pacient: pacient.invalidData })
    wrapper.vm.$forceUpdate()
    const errors = wrapper.findAll('.error--message')
    expect(errors.at(0).text()).toBe('Campo obrigatório')
    expect(errors.at(1).text()).toBe('CPF inválido')
    expect(errors.at(2).text()).toBe('Email inválido')
    expect(errors.at(3).text()).toBe('Data inválida')
  })

  it('feedback form validation should NOT appear', () => {
    wrapper.setData({ pacient: pacient.validData })
    wrapper.vm.$forceUpdate()
    expect(wrapper.findAll('.error--message').length).toBe(0)
  })

  it('click button should call submit method', () => {
    const submit = jest.fn()
    wrapper.setMethods({ submit })
    wrapper.find('form').trigger('submit')
    expect(submit).toHaveBeenCalled()
  })

  it('PacientService post method should NOT be called on submit if data is INVALID', () => {
    wrapper.setData({ pacient: pacient.invalidData })
    const spy = jest.spyOn(PacientService, 'post')
    wrapper.find('form').trigger('submit')
    expect(spy).not.toHaveBeenCalled()
  })

  it('PacientService post method SHOULD be called on submit if data is VALID', () => {
    wrapper.setData({ pacient: pacient.validData })
    const spy = jest.spyOn(PacientService, 'post')
    wrapper.find('form').trigger('submit')
    expect(spy).toHaveBeenCalledWith(pacient.validData)
  })
})