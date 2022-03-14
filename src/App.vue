<template>
  <div id="app" :style="bgStyle">
    <BaseVideo v-if="bgVideo" :src="bgVideo" class="bg-video" />
    <main :class="['menu', `menu--${menuPlacement}`]">
      <Settings
        v-if="showSettings"
        :placement="menuPlacement"
        @update-background="setBackground"
        @update-placement="setMenuPlacement"
      />
      <template v-else>
        <TimerOptions v-model.number="selectedTimer" />
        <Timer :limit="timeLimits[selectedTimer]" />
      </template>
      <button
        data-test-id="settings-button"
        class="button--text"
        @click="showSettings = !showSettings"
      >
        {{ showSettings ? 'Back' : 'Settings' }}
      </button>
    </main>
  </div>
</template>

<script>
import BaseVideo from '@/components/BaseVideo'
import Settings from '@/components/Settings'
import TimerOptions from '@/components/TimerOptions'
import Timer from '@/components/Timer'

export default {
  name: 'App',
  components: {
    BaseVideo,
    Settings,
    TimerOptions,
    Timer,
  },

  data() {
    return {
      bgImg: null,
      bgVideo: null,
      menuPlacement: 'bottom-center',
      selectedTimer: 'pomodoro',
      showSettings: false,
      timeLimits: {
        long: 10,
        pomodoro: 25,
        short: 5,
      },
    }
  },

  computed: {
    bgStyle() {
      return this.bgImg ? `background-image: url(${this.bgImg})` : null;
    },
  },

  methods: {
    setBackground(file) {
      const URL = window.URL
      const fileUrl = URL.createObjectURL(file)
      const fileType = file.type.split('/')[0]

      if (fileType === 'video') {
        this.bgImg = null
        this.bgVideo = fileUrl
      } else if (fileType === 'image') {
        this.bgVideo = null
        this.bgImg = fileUrl
      }
    },

    setMenuPlacement(value) {
      this.menuPlacement = value
    },
  },
}
</script>

<style lang="scss">
@import '~@/styles/main.scss';

#app {
  background-attachment: fixed;
  background-color: $background;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
}

.menu {
  position: fixed;
  text-align: center;
  background: rgba(0, 0, 0, 0.7);
  color: #f1f1f1;
  max-width: 32rem;
  padding: 1rem;

  &--bottom-left {
    left: 0;
    bottom: 0;
    right: none;
    transform: none;
  }

  &--bottom-center {
    left: 50%;
    bottom: 0;
    right: none;
    transform: translateX(-50%);
  }

  &--bottom-right {
    left: none;
    bottom: 0;
    right: 0;
    transform: none;
  }

  &--top-left {
    left: 0;
    bottom: none;
    right: none;
    transform: none;
  }

  &--top-center {
    left: 50%;
    bottom: none;
    right: none;
    transform: translateX(-50%);
  }

  &--top-right {
    left: none;
    bottom: none;
    right: 0;
    transform: none;
  }
}

.bg-video {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  height: 100%;
}
</style>
