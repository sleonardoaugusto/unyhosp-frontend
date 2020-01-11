import { shallowMount, createLocalVue } from '@vue/test-utils'
import HospitalRegister from '@/components/hospitals/HospitalRegister'
import Vuelidate from 'vuelidate'
import HospitalService from '@/services/HospitalService'

const localVue = createLocalVue()
localVue.use(Vuelidate)

describe('HospitalRegister.vue', () => {
  let wrapper

  beforeEach(() => {

    wrapper = shallowMount(HospitalRegister, {
      localVue
    })
  })

  it('component is rendering properly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('feedback form validation should appear', () => {
    const error = wrapper.find('.error--message')
    expect(error.text()).toBe('Campo obrigatório')
  })

  it('feedback form validation should NOT appear', () => {
    const data = { name: 'São Joaquim' }
    wrapper.setData({ hospital: data })
    wrapper.vm.$forceUpdate()
    expect(wrapper.findAll('.error--message').length).toBe(0)
  })

  it('click button should call submit method', () => {
    const submit = jest.fn()
    wrapper.setMethods({ submit })
    wrapper.find('form').trigger('submit')
    expect(submit).toHaveBeenCalled()
  })

  it('HospitalService post method should NOT be called on submit if data is INVALID', () => {
    const serviceSpy = jest.spyOn(HospitalService, 'post')
    wrapper.find('form').trigger('submit')
    expect(serviceSpy).not.toHaveBeenCalled()
  })

  it('HospitalService post method SHOULD be called on submit if data is VALID', () => {
    const data = { name: 'São Joaquim' }
    wrapper.setData({ hospital: data })
    const serviceSpy = jest.spyOn(HospitalService, 'post')
    wrapper.find('form').trigger('submit')
    expect(serviceSpy).toHaveBeenCalledWith(data)
  })
})