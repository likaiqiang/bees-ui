<template>
  <div :class="classes">
    <span class="ui-tag-text">
      <slot></slot>
    </span>
    <ui-icon type="ios-close"></ui-icon>
  </div>
</template>

<script>
const initColorList = ['default', 'primary', 'success', 'warning', 'error', 'blue', 'green', 'red', 'yellow', 'pink', 'magenta', 'volcano', 'orange', 'gold', 'lime', 'cyan', 'geekblue', 'purple'];
import Icon from '../../icon/index.js'
export default {
  name:'ui-tag',
  props:{
    closable:{
      type:Boolean,
      default:false
    },
    checkable:{
      type:Boolean,
      default:false
    },
    checked:{
      type:Boolean,
      default:false
    },
    type:{
      type:String,
      validator(val){
        return ['border','dot'].indexOf(val)!==-1
      }
    },
    color:{
      type:String,
      validator(val){
        return initColorList.indexOf(val)!==-1
      },
      default:'defult'
    },
    name:{
      type:[Number,String]
    },
    fade:{
      type:Boolean,
      default:true
    }
  },
  computed:{
    classes(){
      return [
        'ui-tag',
        `ui-tag-${this.color}`,
        this.checkable ? 'ui-tag-checked' : '',
        this.closable ? 'ui-tag-closable' : '',
        this.type ? `ui-tag-${this.type}` : ''
      ]
    }
  },
  components:{
    [Icon.name]:Icon
  }
}
</script>

<style>

</style>
