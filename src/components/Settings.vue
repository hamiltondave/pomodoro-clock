<template>
  <form class="settings">
    <BField label="Menu Placement">
      <BSelect v-model="placement">
        <option
          v-for="option in placementOptions"
          :key="option.value"
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </BSelect>
    </BField>
    <BField class="file">
      <BUpload
        v-model="file"
        accept="image/*, video/*"
        class="file-label"
      >
        Set Background
      </BUpload>
    </BField>
  </form>
</template>

<script>
export default {
  name: 'Settings',

  data() {
    return {
      file: null,
      placement: 'bottom-center',
      placementOptions: [
        {
          value: "bottom-left",
          label: "Bottom Left",
        },
        {
          value: "bottom-center",
          label: "Bottom Center",
        },
        {
          value: "bottom-right",
          label: "Bottom Right",
        },
        {
          value: "top-left",
          label: "Top Left",
        },
        {
          value: "top-center",
          label: "Top Center",
        },
        {
          value: "top-right",
          label: "Top Right",
        },
      ],
    }
  },

  watch: {
    file: function(newFile) {
      this.$emit('update-background', newFile)
    },

    placement: function(newPlacement) {
      this.$emit('update-placement', newPlacement)
    },
  },
}
</script>

<style scoped lang="scss">
.settings {
  display: block;
  margin-top: 1rem;
  text-align: left;
}

/* .field { */
/*   display: block; */
/*   margin-bottom: 1rem; */
/* } */

/* .file { */
/*   position: relative; */

/*   &__input { */
/*     position: absolute; */
/*     top: 0; */
/*     left: 0; */
/*     width: 100%; */
/*     height: 100%; */
/*     opacity: 0; */
/*     outline: none; */
/*     cursor: pointer; */
/*     z-index: -1; */
/*   } */
/* } */
</style>
