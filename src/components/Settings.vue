<template>
  <form class="settings">
    <label class="field">
      Menu Placement
      <select :value="placement" @change="updatePlacement">
        <option value="bottom-left">Bottom Left</option>
        <option value="bottom-center">Bottom Center</option>
        <option value="bottom-right">Bottom Right</option>
        <option value="top-left">Top Left</option>
        <option value="top-center">Top Center</option>
        <option value="top-right">Top Right</option>
      </select>
    </label>
    <label class="button file field">
      Set Background
      <input
        class="file__input"
        type="file"
        accept="image/*, video/*"
        @change="updateBackground"
      />
    </label>
  </form>
</template>

<script>
export default {
  name: 'Settings',
  props: {
    placement: {
      type: String,
      required: true,
    },
  },

  methods: {
    updateBackground(event) {
      const fileList = event.target.files
      if (fileList.length === 1) {
        this.$emit('update-background', fileList[0])
      }
    },

    updatePlacement(event) {
      this.$emit('update-placement', event.target.value)
    },
  }
}
</script>

<style scoped lang="scss">
.settings {
  display: block;
  margin-top: 1rem;
}

.field {
  display: block;
  margin-bottom: 1rem;
}

.file {
  position: relative;

  &__input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    outline: none;
    cursor: pointer;
    z-index: -1;
  }
}
</style>
