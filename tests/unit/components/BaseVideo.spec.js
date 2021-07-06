import { mount } from '@vue/test-utils'
import BaseVideo from '@/components/BaseVideo.vue'

test('renders video element', () => {
  jest.spyOn(window.HTMLMediaElement.prototype, 'play').mockImplementation(() => {})
  const wrapper = mount(BaseVideo)
  expect(wrapper.find('video').exists()).toBe(true)
})

test('replays video on src change', async () => {
  const playStub = jest.spyOn(window.HTMLMediaElement.prototype, 'play').mockImplementation(() => {})
  const wrapper = mount(BaseVideo)
  await wrapper.setProps({ src: 'test-video' })
  expect(playStub).toHaveBeenCalledTimes(3)
  playStub.mockRestore()
})
