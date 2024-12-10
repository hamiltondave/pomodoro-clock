import { mount } from "@vue/test-utils";
import Timer from "@/components/Timer.vue";

let wrapper;

beforeEach(() => {
  wrapper = mount(Timer, {
    propsData: {
      limit: 5,
    },
  });
  vi.useFakeTimers();
});

afterEach(() => {
  vi.runOnlyPendingTimers();
  vi.useRealTimers();
});

test("renders time remaining", () => {
  expect(wrapper.text()).toContain("5:00");
});

test("renders play button initially", () => {
  const button = wrapper.find('button[aria-label="play"]');
  expect(button.exists()).toBe(true);
});

test("starts timer on clicking play button", async () => {
  expect(wrapper.text()).toContain("5:00");
  const playButton = wrapper.find('button[aria-label="play"]');
  await playButton.trigger("click");
  const pauseButton = wrapper.find('button[aria-label="pause"]');
  expect(pauseButton.exists()).toBe(true);
  await vi.advanceTimersByTime(1000);
  expect(wrapper.text()).toContain("4:59");
});

test("pauses timer on clicking pause button", async () => {
  const playButton = wrapper.find('button[aria-label="play"]');
  await playButton.trigger("click");
  const pauseButton = wrapper.find('button[aria-label="pause"]');
  await pauseButton.trigger("click");
  expect(playButton.exists()).toBe(true);
});

test("resets timer on clicking reset button", async () => {
  expect(wrapper.text()).toContain("5:00");
  const playButton = wrapper.find('button[aria-label="play"]');
  await playButton.trigger("click");
  await vi.advanceTimersByTime(1000);
  expect(wrapper.text()).toContain("4:59");
  const resetButton = wrapper.find('[data-test-id="reset-button"]');
  await resetButton.trigger("click");
  expect(wrapper.text()).toContain("5:00");
});

test("resets timer on limit change", async () => {
  expect(wrapper.text()).toContain("5:00");
  const playButton = wrapper.find('button[aria-label="play"]');
  await playButton.trigger("click");
  await vi.advanceTimersByTime(1000);
  expect(wrapper.text()).toContain("4:59");
  await wrapper.setProps({ limit: 10 });
  expect(wrapper.text()).toContain("10:00");
});

test("ends timer at 0", async () => {
  expect(wrapper.text()).toContain("5:00");
  let playButton = wrapper.find('button[aria-label="play"]');
  await playButton.trigger("click");
  await vi.advanceTimersByTime(300000);
  await playButton.trigger("click");
  expect(wrapper.text()).toContain("0:00");
  playButton = wrapper.find('button[aria-label="play"]');
  expect(playButton.exists()).toBe(true);
});
