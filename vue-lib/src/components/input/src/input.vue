<template>
  <div :class="classes" :style="styles" :readonly="readonly" :disabled="disabled">
    <input type="text" v-model="val">
  </div>
</template>
<script>
export default {
  name:'ui-input',
  props:{
    value:{
      required:true,
      type:String
    }
  },
  computed: {
    classes() {
      return ["ui-input"];
    },
    styles() {
      return {
        display: "inline-block",
        width: this.block ? "100%" : "auto"
      };
    },
    val:{
      get(){
        return this.value
      },
      set(val){
        this.$emit('input',val)
      }
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

