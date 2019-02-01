<template>
  <div :class="classes">
    <div class="ui-input-wrapper" @mouseenter="isHover = true"
        @mouseleave="isHover = false">
      <div class="ui-input-prepend">
        <slot name="prepend"></slot>
      </div>
      <input
        ref="input"
        :type="type"
        :style="inputStyles"
        @focus="focusHandler"
        @blur="blurHandler"
        :placeholder="placeholder"
        v-model="val"
        :readonly="readonly"
        :disabled="disabled"
        :autocomplete="autocomplete"
        :autofocus="autofocus"
      >
      <ui-icon v-show="close && isHover" @click="closeHandler" type="ios-close-circle"/>
    </div>
    <div class="ui-input-append">
      <slot name="append"></slot>
    </div>
  </div>
</template>
<script>
import "@/components/icon/index.js";
export default {
  name: "ui-input",
  data(){
    return {
      isHover:false
    }
  },
  computed: {
    classes() {
      return ["ui-input"];
    },
    inputStyles(){
      return {
        borderRadius:this.radius,
        width:this.width
      }
    },
    val: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
        this.$emit("change", val);
      }
    }
  },
  props: {
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      required: true,
      type: String
    },
    close: {
      default: false,
      type: Boolean
    },
    placeholder: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    autocomplete: {
      type: String,
      default: "off"
    },
    radius:{
      type:String,
      default:'0px'
    },
    width:{
      type:String,
      default:'auto'
    }
  },
  methods: {
    closeHandler() {
      this.val = "";
    },
    focusHandler() {
      this.$emit("focus");
    },
    blurHandler() {
      this.$emit("blur");
    }
  },
  mounted() {
    if (this.autofocus) {
      this.$refs.input.focus();
    }
  }
};
</script>
<style lang="sass">

</style>

