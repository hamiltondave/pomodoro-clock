<template>
  <div>
    <p class="clock">{{ minutes }}:{{ seconds }}</p>
    <template v-if="paused">
      <button aria-label="play" @click="paused = !paused">
        <PlayIcon />
      </button>
    </template>
    <template v-else>
      <button aria-label="pause" @click="paused = !paused">
        <PauseIcon />
      </button>
    </template>
  </div>
</template>

<script>
import { PauseIcon, PlayIcon } from 'vue-feather-icons'

export default {
  name: 'Timer',
  components: {
    PauseIcon,
    PlayIcon,
  },

  props: {
    limit: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      elapsed: 0,
      interval: null,
      paused: true,
    }
  },

  computed: {
    buttonText() {
      return this.paused ? 'Play' : 'Pause'
    },

    minutes() {
      return Math.floor(this.remaining / 60)
    },

    remaining() {
      return this.limit * 60 - this.elapsed
    },

    seconds() {
      const actual = this.remaining % 60
      if (actual < 10) return `0${actual}`
      return actual
    },
  },

  watch: {
    limit() {
      this.paused = true
      this.elapsed = 0
    },

    paused(newValue) {
      if (newValue) {
        this.endTimer()
      } else {
        this.startTimer()
      }
    },

    remaining(newValue) {
      if (newValue === 0) {
        this.endTimer()
      }
    }
  },

  methods: {
    endTimer() {
      clearInterval(this.interval)
    },

    startTimer() {
      this.interval = setInterval(() => (this.elapsed += 1), 1000)
    },
  },
}
</script>

<style scoped>
.clock {
  font-size: 3rem;
}
</style>
