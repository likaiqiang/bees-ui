<template>
  <div :class="loadingClass" v-if="!small" :style="{height:height}">
    <i class="ui-loading-icon"></i>
  </div>
  <div :class="loadingClass" v-else :style="{height:height}">
    <s class="ui-loading-icon"></s>
  </div>
</template>

<script>
export default {
    name: "ui-loading",
    props:{
      small:{
        type:Boolean,
        default:false
      },
      primary:{
        type:Boolean,
        default:false
      },
      value:{
        type:Boolean,
        default:false
      },
      height:{
        type:String,
        default:'auto'
      }
    },
    computed:{
      loadingClass(){
        return ['ui-loading',this.primary ? 'ui-loading-primary' : null]
      }
    }
};
</script>

<style>
</style>
