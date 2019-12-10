import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import BedCard from '@/components/BedCard'
import beds from '@/components/__tests__/__mocks__/beds'

describe('BedCard.vue', () => {
  let wrapper
  const propsData = { bed: beds.data[0] }

  beforeEach(() => {
    wrapper = shallowMount(BedCard, {
      propsData,
      stubs: {
        RouterLink: RouterLinkStub
      }
    })
  })

  it('component is rendering properly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})