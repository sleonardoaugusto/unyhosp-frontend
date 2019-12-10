import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import UTIList from '@/components/UTIList'
import utis from '@/components/__tests__/__mocks__/utis'


describe('HospitalList.vue', () => {
  let wrapper

  const $route = {
    params: { hospitalId: 1 }
  }

  beforeEach(() => {
    wrapper = shallowMount(UTIList, {
      stubs: {
        RouterLink: RouterLinkStub
      },
      mocks: {
        $route
      }
    })
  })

  it('component is rendering properly', () => {
    wrapper.setData({ utis: utis.data })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
