<template>
  <div id="app">
    <main>
      <h1>pomodoro</h1>
      <BreakOptions v-model.number="selectedTimer" />
      <Timer :limit="timeLimits[selectedTimer]" />
    </main>
  </div>
</template>

<script>
import BreakOptions from './components/BreakOptions'
import Timer from './components/Timer.vue'

export default {
  name: 'App',
  components: {
    BreakOptions,
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
