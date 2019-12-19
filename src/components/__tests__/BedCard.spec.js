import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import BedCard from '@/components/BedCard'
import beds from '@/components/__tests__/__mocks__/beds'

const localVue = createLocalVue()
localVue.use(VueRouter)

describe('BedCard.vue', () => {
  let wrapper
  const propsData = { bed: beds.data[0] }

  beforeEach(() => {
    wrapper = shallowMount(BedCard, {
      localVue,
      propsData
    })
  })

  it('component is rendering properly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})