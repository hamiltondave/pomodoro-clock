import { mount } from '@vue/test-utils'
import Settings from '@/components/Settings.vue'

test('renders file input for background', () => {
  const wrapper = mount(Settings)
  expect(wrapper.find('input[type="file"]').exists()).toBe(true)
});

test('emits update-background event on input change', () => {
  const wrapper = mount(Settings)
  wrapper.vm.updateBackground({target: {files: [{}]}})
  expect(wrapper.emitted()['update-background']).toBeTruthy()
  expect(wrapper.emitted()['update-background'].length).toBe(1)
})

test('does not emit update-background event for empty file list', () => {
  const wrapper = mount(Settings)
  wrapper.vm.updateBackground({target: {files: []}})
  expect(wrapper.emitted()['update-background']).not.toBeTruthy()
})
