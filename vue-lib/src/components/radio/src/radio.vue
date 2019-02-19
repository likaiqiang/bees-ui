<template>
  <div style="display:inline-block">
    <input ref="input" type="radio" :id="id" :disabled="disabled" :checked="value">
    <label :for="id" class="ui-radio"></label>
    <label :for="id">{{label}}</label>
  </div>
</template>

<script>
import { createId } from "@/utils/tools";
export default {
  name: "ui-radio",
  data() {
    return {
      id: createId()
    };
  },
  props: {
    value: {
      type: Boolean,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    disabled:{
        type:Boolean,
        default:false
    }
  },
  mounted() {
    this.$refs.input.addEventListener("change", () => {
      if(!this.disabled)
        this.$emit("input", !this.value);
    });
  }
};
</script>

<style>
</style>
