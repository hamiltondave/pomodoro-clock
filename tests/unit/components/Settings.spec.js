import { mount } from '@vue/test-utils'
import Settings from '@/components/Settings.vue'

let wrapper

beforeEach(() => {
  wrapper = mount(Settings, {
    propsData: {
      placement: 'bottom-center',
    },
  })
})

test('renders file input for background', () => {
  expect(wrapper.find('input[type="file"]').exists()).toBe(true)
});

test('emits update-background event on input change', () => {
  wrapper.vm.updateBackground({target: {files: [{}]}})
  expect(wrapper.emitted()['update-background']).toBeTruthy()
  expect(wrapper.emitted()['update-background'].length).toBe(1)
})

test('does not emit update-background event for empty file list', () => {
  wrapper.vm.updateBackground({target: {files: []}})
  expect(wrapper.emitted()['update-background']).not.toBeTruthy()
})

test('renders select for menu placement', () => {
  expect(wrapper.find('select').exists()).toBe(true)
})

test('emits update-placement event on select change', () => {
  wrapper.vm.updatePlacement({target: {value: 'bottom-right'}})
  expect(wrapper.emitted()['update-placement']).toBeTruthy()
})
