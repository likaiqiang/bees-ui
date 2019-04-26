<template>
  <div class="ui-dialog-container" v-dom-portal  v-show="visible">
    <div class="ui-dialog">
      <ui-icon type="md-close" class="ui-dialog-close ESC" @click="closeDialog()"></ui-icon>
      <div class="ui-dialog-title" role="heading">{{title}}</div>
      <div class="ui-dialog-body">
          <template v-if="typeof content !== 'function'">
              <slot></slot>
          </template>
          <Render v-else :render="content"></Render>
      </div>
      <div class="ui-dialog-footer">
        <ui-button 
          v-for="(btn,i) in buttons" 
          :key="i" 
          :type="i ? (btn.type || 'primary') : (btn.type || '')"
          @click="clickBtn(i)">
          {{i ? (btn.value || '确定') : (btn.value || '取消')}}
        </ui-button>
      </div>
    </div>
  </div>
</template>

<script>
import uiIcon from "@/components/icon";
import uiButton from "@/components/button";
import { isEmptyObject } from "@/utils/tools.js";
import Render from '@/utils/render.js'

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
      i ? this.$emit('sure') : this.$emit('cancle')
      this.closeDialog()
    }
  },
  components:{
    uiIcon,
    uiButton,
    Render
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
    },
    content:{
        
    }
  },
};
</script>
