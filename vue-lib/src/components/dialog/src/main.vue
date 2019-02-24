<template>
  <div class="ui-dialog-container" ref="dialogContainer"  v-show="visible">
    <div class="ui-dialog" ref="dialog" v-click-outside="closeDialog">
      <div class="ui-dialog-header">
        <p class="ui-dialog-title">{{title}}</p>
        <ui-icon type="md-close" class="ui-dialog-close" @click="closeDialog()"></ui-icon>
      </div>
      <dialog-body>
        <slot></slot>
      </dialog-body>
      <div class="ui-dialog-footer">
        <ui-button 
          v-for="(btn,i) in buttons" 
          :key="i" 
          :type="i ? (btn.type || '') : (btn.type || 'primary')"
          @click="clickBtn(i)">
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
import { isEmptyObject } from "@/utils/tools.js";
import ClickOutside from '@/directives/clickoutside.js'

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
      this.$emit('update:visible',false)
    },
    clickBtn(i){
      if(typeof this.buttons[i].callback == 'function'){
        this.buttons[i].callback.call(this)
      }
      this.closeDialog()
    }
  },
  directives:{
    ClickOutside
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
};
</script>
