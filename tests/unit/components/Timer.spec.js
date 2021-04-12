import { shallowMount } from '@vue/test-utils'
import Timer from '@/components/Timer.vue'

describe('Timer.vue', () => {
  const wrapper = shallowMount(Timer, {
    propsData: {
      limit: 5,
    },
  })

  it('renders time remaining', () => {
    expect(wrapper.text()).toContain('5:00')
  })

  it('renders play button initially', () => {
    const button = wrapper.find('button[aria-label="play"]')
    expect(button.exists()).toBe(true)
  })
})
