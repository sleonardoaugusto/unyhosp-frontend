import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import NotificationList from '@/components/notification/NotificationList'
import Notification from '@/components/notification/Notification'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('NotificationList', () => {
  let wrapper

  let store
  let state
  let actions

  beforeEach(() => {
    state = {
      notifications: [{
        message: 'Problema de conexão: Network Error',
        type: 'error'
      }]
    }

    actions = {
      'notification/remove': jest.fn()
    }

    store = new Vuex.Store({
      modules: {
        notification: {
          state,
          actions
        }
      }
    })

    wrapper = shallowMount(NotificationList, {
      localVue,
      store
    })
  })

  it('renders the component', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders notification child component if $store notification is not empty', () => {
    const notification = wrapper.find(Notification)
    expect(notification.exists()).toBeTruthy()
  })

  it('validate binded notification computed prop passed to notification child component', () => {
    const notification = wrapper.find(Notification)
    expect(notification.vm.notification).toEqual(wrapper.vm.notifications[0])
  })

  it('calls close method at close-notification', () => {
    const closeFunction = spyOn(wrapper.vm, 'close')
    wrapper.find(Notification).vm.$emit('close-notification')
    expect(closeFunction).toHaveBeenCalled()
  })

  it('close method trigger store remove method', () => {
    const notificationData = {
      notification: {
        message: 'Problema de conexão: Network Error',
        type: 'error'
      }
    }
    expect(actions['notification/remove']).not.toHaveBeenCalled()
    wrapper.vm.close(notificationData)
    expect(actions['notification/remove']).toHaveBeenCalled()
  })
})