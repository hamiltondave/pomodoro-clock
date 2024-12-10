<template>
  <fieldset class="fieldset">
    <label
      v-for="option in options"
      :key="option.value"
      :class="['button', 'timer', { 'timer--selected': selectedOption === option.value }]"
    >
      <input
        name="options"
        type="radio"
        :value="option.value"
        class="timer__input"
        v-model="selectedOption"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      {{ option.label }}
    </label>
  </fieldset>
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
}
</script>

<style scoped lang="scss">
@use '@/styles/_colors.scss' as *;

.fieldset {
  background-color: transparent;
  padding: 0;
  border: 1px solid $grey-light;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  margin: auto;
  width: max-content;
}

.timer {
  border: 1px solid transparent;
  margin-right: 1px;
  padding: .8rem;
  background-color: transparent;

  &--selected {
    background-color: $grey-dark;
  }

  &__input {
    display: none;
  }
}
</style>
