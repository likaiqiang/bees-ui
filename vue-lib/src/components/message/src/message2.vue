<template>
    <div :class="['jn-message','jn-message-'+icon]" :style="{'z-index':ZINDEX++}">
        <i :class="['jn-icon-'+icon,'jn-message-icon']" v-if="icon"></i>
        <div class="jn-message-content">
          <template v-if="htmlEnable">
              <div v-html="$slots.default[0]" class="jn-message-content" >

              </div>
          </template>
          <template v-else>
              <slot>

              </slot>
          </template>
        </div>
        <i v-if="closeButton" class="jn-message-close jn-icon-close" @click="closeMessage"></i>
    </div>
</template>
<script>
import {ZINDEX} from '@/js/utils/const.js'
export default {
  name: "jn-message",
  data(){
    return {
      ZINDEX
    }
  },
  mounted() {
    setTimeout(() => {
      this.close();
    }, this.delay);
  },
  props: {
    delay: {
      type: Number,
      default: 3000
    },
    htmlEnable: {
      type: Boolean,
      default: false
    },
    closeButton:{
      type:Boolean,
      default:false
    },
    callback:{
      type:Object
    },
    icon: {
      type: String,
      default: "info"
    }
  },
  methods: {
    close() {
      this.$el.remove();
      this.$emit("close");
      this.$destroy();
    },
    closeMessage() {
      var beforeClose = this.callback.beforeClose,
          afterClose = this.callback.afterClose
      beforeClose && beforeClose.call(this, this);
      this.close();
      afterClose && afterClose.call(this, this);
    }
  }
};
</script>
<style lang="scss">
@import "../../../css/message.scss";
</style>