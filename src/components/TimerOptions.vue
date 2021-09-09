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
}
</script>

<style scoped lang="scss">
@import '~@/styles/_colors.scss';

/* .fieldset { */
/*   background-color: transparent; */
/*   padding: 0; */
/*   border: 1px solid $grey-light; */
/*   border-radius: 4px; */
/*   display: flex; */
/*   justify-content: center; */
/*   margin: auto; */
/*   width: max-content; */
/* } */

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
