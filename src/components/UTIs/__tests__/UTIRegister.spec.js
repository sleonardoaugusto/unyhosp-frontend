import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuelidate from 'vuelidate'
import UTIService from '@/services/UTIService'
import UTIRegister from '@/components/UTIs/UTIRegister'

const localVue = createLocalVue()
localVue.use(Vuelidate)

describe('UTIRegister.vue', () => {
  let wrapper

  beforeEach(() => {

    wrapper = shallowMount(UTIRegister, {
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
    const data = { name: 'UTI - A' }
    wrapper.setData({ uti: data })
    wrapper.vm.$forceUpdate()
    expect(wrapper.findAll('.error--message').length).toBe(0)
  })

  it('click button should call submit method', () => {
    const submit = jest.fn()
    wrapper.setMethods({ submit })
    wrapper.find('form').trigger('submit')
    expect(submit).toHaveBeenCalled()
  })

  it('UTIService post method should NOT be called on submit if data is INVALID', () => {
    const spy = jest.spyOn(UTIService, 'post')
    wrapper.find('form').trigger('submit')
    expect(spy).not.toHaveBeenCalled()
  })

  it('UTIService post method SHOULD be called on submit if data is VALID', () => {
    const data = { name: 'UTI - A' }
    wrapper.setData({ uti: data })
    const spy = jest.spyOn(UTIService, 'post')
    wrapper.find('form').trigger('submit')
    expect(spy).toHaveBeenCalledWith(data)
  })
})