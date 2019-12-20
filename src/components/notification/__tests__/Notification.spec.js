import { shallowMount } from '@vue/test-utils'
import Notification from '@/components/notification/Notification'

describe('Notification', () => {
  let wrapper
  const close = jest.fn()

  beforeEach(() => {
    wrapper = shallowMount(Notification, {
      propsData: {
        notification: {
          message: 'Problema de conexão: Network Error',
          type: 'error'
        }
      },
      methods: {
        close
      }
    })
  })

  it('renders component', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('span click must trigger close method', () => {
    wrapper.find('span').trigger('click')
    expect(close).toHaveBeenCalled()
  })
})