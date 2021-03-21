<template>
  <div>
    <h1 class="clock">{{ minutes }}:{{ seconds }}</h1>
    <button
      v-if="paused"
      aria-label="play"
      class="timer__button timer__button--play"
      @click="paused = !paused"
    >
      <PlayIcon />
    </button>
    <button
      v-else
      aria-label="pause"
      class="timer__button timer__button--pause"
      @click="paused = !paused"
    >
      <PauseIcon />
    </button>
    <button
      class="timer__reset"
      @click="resetTimer"
    >
      Reset
    </button>
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
}

.timer {
  &__button {
    border-radius: 50%;
    border: none;
    height: 48px;
    width: 48px;
    background-color: $primary;
    color: $text;

    &--play {
      padding: 4px 0px 2px 2px;
    }

    &--pause {
      padding: 4px 0px 2px 1px;
    }

    &:hover {
    }
  }
}
</style>
