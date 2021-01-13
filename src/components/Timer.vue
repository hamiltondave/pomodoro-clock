<template>
  <div>
    <p>{{ minutes }}:{{ seconds }}</p>
    <button @click="paused = !paused">{{ buttonText }}</button>
  </div>
</template>

<script>
export default {
  name: 'Timer',
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
      paused: false,
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

  mounted() {
    this.startTimer()
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
