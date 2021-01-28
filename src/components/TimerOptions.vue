<template>
  <fieldset class="fieldset">
    <label :class="['timer', { 'timer--selected': selectedOption === 'pomodoro' }]">
      <input
        name="options"
        type="radio"
        value="pomodoro"
        class="timer__input"
        v-model="selectedOption"
        @input="$emit('input', $event.target.value)"
      />
      Pomodoro
    </label>
    <label :class="['timer', { 'timer--selected': selectedOption === 'short' }]">
      <input
        name="options"
        type="radio"
        value="short"
        class="timer__input"
        v-model="selectedOption"
        @input="$emit('input', $event.target.value)"
      />
      Short Break
    </label>
    <label :class="['timer', { 'timer--selected': selectedOption === 'long' }]">
      <input
        name="options"
        type="radio"
        value="long"
        class="timer__input"
        v-model="selectedOption"
        @input="$emit('input', $event.target.value)"
      />
      Long Break
    </label>
  </fieldset>
</template>

<script>
export default {
  name: 'TimerOptions',
  data() {
    return {
      selectedOption: 'pomodoro',
    }
  },
}
</script>

<style scoped lang="scss">
@import '~@/styles/_colors.scss';

.fieldset {
  border: none;
  display: flex;
  justify-content: center;
  margin: auto;
  width: max-content;
}

.timer {
  display: block;
  padding: 1rem 1.5rem;
  border-radius: 8px;

  &--selected {
    background-color: $green;
  }

  &__input {
    display: none;
  }
}
</style>
