import { mount } from '@vue/test-utils'
import Settings from '@/components/Settings.vue'

test('renders file input for background', () => {
  const wrapper = mount(Settings)
  expect(wrapper.find('input[type="file"]').exists()).toBe(true)
});

test('emits update-background event on input change', async () => {
  const wrapper = mount(Settings)
  await wrapper.setData({ file: {} })
  expect(wrapper.emitted()['update-background']).toBeTruthy()
  expect(wrapper.emitted()['update-background'].length).toBe(1)
})

test('renders select for menu placement', () => {
  const wrapper = mount(Settings)
  expect(wrapper.find('select').exists()).toBe(true)
})

test('emits update-placement event on select change', async () => {
  const wrapper = mount(Settings)
  await wrapper.setData({ placement: 'bottom-right' })
  expect(wrapper.emitted()['update-placement']).toBeTruthy()
})
