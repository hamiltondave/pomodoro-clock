import { mount } from '@vue/test-utils'
import App from '@/App.vue'
import Settings from '@/components/Settings.vue'
import Timer from '@/components/Timer.vue'

test('renders app', () => {
  const wrapper = mount(App)
  expect(wrapper.find('#app').exists()).toBe(true)
})

test('sets image background', () => {
  window.URL = {
    createObjectURL: () => 'test-file-url'
  }
  const file = new File(['test-image'], 'test-image.jpg', {
    type: 'image/jpg',
  });
  const wrapper = mount(App)
  wrapper.vm.setBackground(file)
  expect(wrapper.vm.bgStyle).toBe('background-image: url(test-file-url)')
})

test('sets video background', async () => {
  jest.spyOn(window.HTMLMediaElement.prototype, 'play').mockImplementation(() => {})
  window.URL = {
    createObjectURL: () => 'test-file-url'
  }
  const file = new File(['test-video'], 'test-video.mp4', {
    type: 'video/mp4',
  });
  const wrapper = mount(App)
  await wrapper.vm.setBackground(file)
  expect(wrapper.find('.bg-video').exists()).toBe(true)
})

test('handles unexpected file type for background', () => {
  window.URL = {
    createObjectURL: () => 'test-file-url'
  }
  const file = new File(['test-txt'], 'test-text.txt', {
    type: 'text/txt',
  });
  const wrapper = mount(App)
  wrapper.vm.setBackground(file)
  expect(wrapper.vm.bgStyle).toBe(null)
})

test('sets styling for menu placement', async () => {
  const wrapper = mount(App)
  await wrapper.vm.setPlacement('bottom-right')
  expect(wrapper.find('.menu--bottom-right').exists()).toBe(true)
})

test('shows settings menu if button is clicked', async () => {
  const wrapper = mount(App)
  expect(wrapper.findComponent(Settings).exists()).toBe(false)
  expect(wrapper.findComponent(Timer).exists()).toBe(true)

  const settingsButton = wrapper.find('[data-test-id="settings-button"]')
  await settingsButton.trigger('click')
  expect(wrapper.findComponent(Settings).exists()).toBe(true)
  expect(wrapper.findComponent(Timer).exists()).toBe(false)
})
