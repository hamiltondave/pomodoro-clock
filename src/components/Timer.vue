<template>
  <p>25:00</p>
</template>

<script>
export default {
  name: 'Timer',
  props: {
    minutes: {
      type: Number,
      required: true,
    },
  }
}
</script>
