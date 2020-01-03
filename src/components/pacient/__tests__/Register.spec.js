import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Register from '@/components/pacient/Register'
import VueTheMask from 'vue-the-mask'
import Vuelidate from 'vuelidate'
import PacientService from '@/services/PacientService'
import pacient from '@/components/pacient/__tests__/__mocks__/pacient'
import Vuex from 'vuex'
import flushPromises from 'flush-promises'

jest.mock('@/services/PacientService', () => ({
  post: () => (Promise.resolve())
}))

const localVue = createLocalVue()

localVue.use(VueRouter)
localVue.use(VueTheMask)
localVue.use(Vuelidate)
localVue.use(Vuex)

describe('Register.vue', () => {
  let wrapper

  let store
  let state
  let actions

  beforeEach(() => {
    state = {
      notifications: []
    }

    actions = {
      'notification/add': jest.fn()
    }

    store = new Vuex.Store({
      modules: {
        notification: {
          state,
          actions
        }
      }
    })

    wrapper = shallowMount(Register, {
      localVue,
      store
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
    const serviceSpy = jest.spyOn(PacientService, 'post')
    wrapper.find('form').trigger('submit')
    expect(serviceSpy).not.toHaveBeenCalled()
  })

  it('PacientService post method SHOULD be called on submit if data is VALID', () => {
    wrapper.setData({ pacient: pacient.validData })
    const serviceSpy = jest.spyOn(PacientService, 'post')
    wrapper.find('form').trigger('submit')
    expect(serviceSpy).toHaveBeenCalledWith(pacient.validData)
  })

  it('Promise resolved should call notification add store module method', async () => {
    wrapper.setData({ pacient: pacient.validData })
    wrapper.find('form').trigger('submit')
    await flushPromises()
    expect(actions['notification/add']).toHaveBeenCalled()
  })
})