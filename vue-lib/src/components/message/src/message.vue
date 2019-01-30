<template>
    <div :class="classes" :aria-label="label" role="message" tabindex="0">
        <i class="ui-message-icon">&nbsp;</i>
        <span class="ui-message-text">{{message}}</span>
    </div>
</template>

<script>
import { outerWidth } from "@/js/utils/tools.js";
export default {
  name: "ui-message",
  props: {
    type: {
      type: String,
      default: "success",
      validator: function(val) {
        return ["success", "error"].indexOf(val) != -1;
      }
    },
    message: {
      type: String,
      required: true
    },
    time: {
      type: Number,
      default: 3000
    }
  },
  mounted() {
    var message = this.$el;
    message.style.left = "50%";

    this.$nextTick(() => {
      message.style.marginLeft = outerWidth(message) * -0.5 + "px"
    });
    setTimeout(() => {
      this.$destroy();
      this.$el.remove();
    }, this.time);
  },
  computed: {
    classes() {
      return ["ui-message", this.type && "ui-message-" + this.type];
    },
    label() {
      const config = {
        success: "操作成功",
        error: "操作失败"
      };
      return config[this.type];
    }
  }
};
</script>

<style lang="scss">
@import "../../../css/message.scss";
</style>
