<template>
  <video ref="videoRef" :src="src" muted loop />
</template>

<script>
export default {
  name: 'BaseVideo',
  props: {
    src: String,
  },

  mounted() {
    this.$refs.videoRef.play()
  },

  updated() {
    this.$refs.videoRef.play()
  },
}
</script>
