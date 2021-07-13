<template>
  <div class="timer">
    <h1 class="clock">{{ minutes }}:{{ seconds }}</h1>
    <div>
      <button
        v-if="paused"
        aria-label="play"
        class="timer__button timer__button--play"
        @click="paused = !paused"
      >
        <PlayIcon size="48" />
      </button>
      <button
        v-else
        aria-label="pause"
        class="timer__button timer__button--pause"
        @click="paused = !paused"
      >
        <PauseIcon size="48" />
      </button>
    </div>
    <div>
      <button
        data-test-id="reset-button"
        aria-label="reset"
        class="timer__button timer__button--reset"
        @click="resetTimer"
      >
        <RotateCcwIcon size="24" />
      </button>
    </div>
  </div>
</template>

<script>
import { PauseIcon, PlayIcon, RotateCcwIcon } from 'vue-feather-icons'

export default {
  name: 'Timer',
  components: {
    PauseIcon,
    PlayIcon,
    RotateCcwIcon
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
      this.resetTimer()
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

    resetTimer() {
      this.paused = true
      this.elapsed = 0
    },
  },
}
</script>

<style scoped lang="scss">
@import '~@/styles/_colors.scss';

.clock {
  font-size: 3rem;
  margin: 1rem 0 .5rem 0;
}

.timer {
  &__button {
    margin: .5rem 0;
    border: none;

    background-color: transparent;
    cursor: pointer;

    color: $white;
  }
}
</style>
