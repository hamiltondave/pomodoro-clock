<template>
  <div id="app" :style="bgStyle">
    <BaseVideo v-if="bgVideo" :src="bgVideo" class="bg-video" />
    <main id="content">
      <h1>pomodoro</h1>
      <TimerOptions v-model.number="selectedTimer" />
      <Timer :limit="timeLimits[selectedTimer]" />
      <Settings @update-background="setBackground" />
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
      selectedTimer: 'pomodoro',
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
    }
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
  },
}
</script>

<style lang="scss">
@import '~@/styles/main.scss';

#app {
  background-attachment: fixed;
  background-color: $bg-dark;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
}

#content {
  position: absolute;
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
  color: #f1f1f1;
  max-width: 32rem;
  padding: 1rem;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
}

.bg-video {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  height: 100%;
}
</style>
