import { shallowMount, createLocalVue } from '@vue/test-utils'
import Pacient from '@/views/Attendance'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(VueRouter)

describe('Attendance.vue', () => {
  let wrapper

  wrapper = shallowMount(Pacient, {
    localVue
  })

  it('renders component properly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})