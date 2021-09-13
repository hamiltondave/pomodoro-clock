import { mount } from '@vue/test-utils'
import TimerOptions from '@/components/TimerOptions.vue'

test('renders timer settings', () => {
  const wrapper = mount(TimerOptions)
  expect(wrapper.find('input[value="pomodoro"]').exists()).toBe(true)
  expect(wrapper.find('input[value="short"]').exists()).toBe(true)
  expect(wrapper.find('input[value="long"]').exists()).toBe(true)
})

test('emits input event on selecting timer option', async () => {
  const wrapper = mount(TimerOptions)
  await wrapper.setData({ selectedOption: 'short' })
  expect(wrapper.emitted()['input']).toBeTruthy()
  expect(wrapper.emitted()['input'].length).toBe(1)
})
