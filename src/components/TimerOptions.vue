<template>
  <BField>
    <BRadioButton
      v-for="option in options"
      :key="option.value"
      v-model="selectedOption"
      :native-value="option.value"
      type="is-black"
    >
      {{ option.label }}
    </BRadioButton>
  </BField>
</template>

<script>
const options = [
  {
    label: 'Pomodoro',
    value: 'pomodoro',
  },
  {
    label: 'Short Break',
    value: 'short',
  },
  {
    label: 'Long Break',
    value: 'long',
  },
]

export default {
  name: 'TimerOptions',
  data() {
    return {
      options: options,
      selectedOption: 'pomodoro',
    }
  },

  watch: {
    selectedOption(value) {
      this.$emit('input', value)
    },
  },
}
</script>
