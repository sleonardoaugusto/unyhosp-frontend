import { shallowMount } from '@vue/test-utils'
import Notification from '@/components/notification/Notification'
import BaseIcon from '@/components/common/BaseIcon'

describe('Notification.vue', () => {
  let wrapper
  const close = jest.fn()

  beforeEach(() => {
    wrapper = shallowMount(Notification, {
      propsData: {
        notification: {
          message: 'Problema de conexão: Network Error',
          type: 'error'
        }
      }
    })
  })

  it('renders component', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('span click should trigger close method', () => {
    wrapper.setMethods({ close })
    wrapper.find(BaseIcon).trigger('click')
    expect(close).toHaveBeenCalled()
  })
})