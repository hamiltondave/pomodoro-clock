<template>
  <fieldset>
    <label>
      <input
        name="options"
        type="radio"
        value="pomodoro"
        v-model="selectedOption"
        @input="$emit('input', $event.target.value)"
      />
      Pomodoro
    </label>
    <label>
      <input
        name="options"
        type="radio"
        value="short"
        v-model="selectedOption"
        @input="$emit('input', $event.target.value)"
      />
      Short Break
    </label>
    <label>
      <input
        name="options"
        type="radio"
        value="long"
        v-model="selectedOption"
        @input="$emit('input', $event.target.value)"
      />
      Long Break
    </label>
  </fieldset>
</template>

<script>
export default {
  name: 'BreakOptions',
  data() {
    return {
      selectedOption: 'pomodoro',
    }
  },
}
</script>
