<template>
  <div id="app">
    <main>
      <h1>pomodoro</h1>
      <TimerOptions v-model.number="selectedTimer" />
      <Timer :limit="timeLimits[selectedTimer]" />
    </main>
  </div>
</template>

<script>
import TimerOptions from '@/components/TimerOptions'
import Timer from '@/components/Timer'

export default {
  name: 'App',
  components: {
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
  }
}
</script>

<style lang="scss">
@import '~@/styles/main.scss';

#app {
  text-align: center;
}
</style>
