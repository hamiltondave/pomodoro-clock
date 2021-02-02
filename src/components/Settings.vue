<template>
  <form class="settings">
    <label class="button file">
      Set Background
      <input
        class="file__input"
        type="file"
        accept="video/*"
        @change="updateBackground"
      />
    </label>
  </form>
</template>

<script>
export default {
  name: 'Settings',

  methods: {
    updateBackground(event) {
      const fileList = event.target.files
      console.log(fileList)
      if (fileList.length === 1) {
        this.$emit('update-background', fileList[0])
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '~@/styles/_variables.scss';

.settings {
  display: block;
  margin-top: 1rem;
}

.button {
  display: inline-block;
  background-color: $bg-light;
  border-radius: 4px;
  color: $bg-dark;
  padding: 1rem 1.5rem;
  cursor: pointer;
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
