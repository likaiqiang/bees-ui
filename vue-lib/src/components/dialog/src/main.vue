<template>
  <div class="ui-dialog-container" ref="dialogContainer" @click="handleWrapperClick" tabindex="-1" v-show="visible">
    <div class="ui-dialog" ref="dialog">
      <div class="ui-dialog-header">
        <p class="ui-dialog-title">{{title}}</p>
        <ui-icon name="close" class="ui-dialog-close" @click="closeDialog()"></ui-icon>
      </div>
      <dialog-body>
        <slot></slot>
      </dialog-body>
      <div class="ui-dialog-footer">
        <ui-button 
          v-for="(btn,i) in buttons" 
          :key="i" 
          :type="i ? (btn.type || '') : (btn.type || 'primary')">
          {{i ? (btn.value || '取消') : (btn.value || '确定')}}
        </ui-button>
      </div>
    </div>
  </div>
</template>

<script>
import uiIcon from "@/components/icon";
import uiButton from "@/components/button";
import uiInput from "@/components/input";
import dialogBody from './dialogBody.vue'

import VeeValidate, { Validator } from "vee-validate";
import zh_CN from "vee-validate/dist/locale/zh_CN";
import { isEmptyObject } from "@/js/utils/tools.js";

Validator.localize("zh_CN", zh_CN);

// for (var key in rules) {
//   Validator.extend(key, rules[key]);
// }

export default {
  name: "ui-dialog",
  data() {
    return {
      
    };
  },
  created() {
    
  },
  methods: {
    closeDialog(){

    }
  },
  components:{
    dialogBody
  },
  props: {
    title: {
      required: true,
      type: String
    },
    buttons:{
      type: Array,
      default:()=>{
        return [{},{}]
      }
    },
    visible:{
      type:Boolean,
      default:false
    }
  },
  methods: {
    handleWrapperClick(e) {
      var { dialog } = this.$refs;

      if (e.target != dialog && e.target.contains(dialog)) {
        this.closeDialog();
      }
    }
  }
};
</script>

<style lang="scss">
  @import "../../../css/dialog.scss";
</style>
