<template>
  <div :class="classes" :style="styles" :readonly="readonly" :disabled="disabled">
    <input type="text">
    <label for="forInputFocus" class="ui-input-count" v-show="count != undefined">
        <span>0</span>/<span>20</span>
    </label>
  </div>
</template>
<script>
export default {
  computed: {
    classes() {
      return ["ui-input",this.count != undefined && 'ui-input-x'];
    },
    styles() {
      return {
        display: "inline-block",
        width: this.block ? "100%" : "auto"
      };
    }
  },
  props: {
    block: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    count:{
        type:Number
    }
  }
};
</script>
<style lang="sass">

</style>

