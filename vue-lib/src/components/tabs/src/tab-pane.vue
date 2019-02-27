<template> </template>

<script>
export default {
  name: "ui-tab-pane",
  props: {
    name: {
      required: true,
      type: String
    },
    label: {
      required: true,
      type: String
    },
    contentVisible: {
      defaulr: true,
      type: Boolean
    }
  }
};
</script>

<style></style>
