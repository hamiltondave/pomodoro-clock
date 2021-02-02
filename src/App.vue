<template>
  <div id="app">
    <video ref="videoRef" muted loop id="bg-video" />
    <main id="content">
      <h1>pomodoro</h1>
      <TimerOptions v-model.number="selectedTimer" />
      <Timer :limit="timeLimits[selectedTimer]" />
      <Settings @update-background="setBackground" />
    </main>
  </div>
</template>

<script>
import Settings from '@/components/Settings'
import TimerOptions from '@/components/TimerOptions'
import Timer from '@/components/Timer'

export default {
  name: 'App',
  components: {
    Settings,
    TimerOptions,
    Timer,
  },

  data() {
    return {
      selectedTimer: 'pomodoro',
      timeLimits: {
        long: 10,
        pomodoro: 25,
        short: 5,
      },
    }
  },

  methods: {
    setBackground(file) {
      const URL = window.URL
      const fileUrl = URL.createObjectURL(file)
      console.log(fileUrl)
      this.$refs.videoRef.src = fileUrl
      this.$refs.videoRef.play()
    },
  },
}
</script>

<style lang="scss">
@import '~@/styles/main.scss';

#app {
  background-color: $bg-dark;
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

#bg-video {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  height: 100%;
}
</style>
