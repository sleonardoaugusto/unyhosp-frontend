import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { state, actions, mutations } from '@/store/modules/notification'
import notificationFixture from './__mocks__/notificationFixture'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('notification.js', () => {
  let store

  store = new Vuex.Store({
    modules: {
      notification: {
        state,
        actions,
        mutations
      }
    }
  })

  it('add action must call PUSH mutation', () => {
    const context = {
      commit: jest.fn()
    }
    actions.add(context, notificationFixture)
    expect(context.commit).toHaveBeenCalledWith('PUSH', notificationFixture)
  })

  it('push mutation must add notification to state', () => {
    store.commit('PUSH', notificationFixture)
    const expected = notificationFixture.message
    const received = store.state.notification.notifications[0].message
    expect(expected).toEqual(received)
  })

  it('remove action must call DELETE mutation', () => {
    const context = {
      commit: jest.fn()
    }
    actions.remove(context, notificationFixture)
    expect(context.commit).toHaveBeenCalledWith('DELETE', notificationFixture)
  })

  it('delete mutation must remove notification to state', () => {
    const item = store.state.notification.notifications[0]
    store.commit('DELETE', item)
    const expected = []
    const received = store.state.notification.notifications
    expect(expected).toEqual(received)
  })
})