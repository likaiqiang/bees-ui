<template>

    <div class="ui-circle">
      <svg :width="width" :height="height" viewBox="0 0 440 440">
        <circle cx="220" cy="220" r="170" stroke-width="50" stroke="#D1D3D7" fill="none"></circle>
        <circle cx="220" cy="220" r="170" stroke-width="50" stroke="#00A5E0" fill="none" transform="matrix(0,-1,1,0,0,440)" :stroke-dasharray="value+' '+1069"></circle>
      </svg>
      <div class="ui-circle-content" :style="{width:width/2+'px',height:height/2+'px'}">
        <slot></slot>
      </div>
    </div>
</template>

<script>
export default {
  name:'ui-circle',
  props:{
    value:{
      type:Number,
      default:0
    },
    width:{
      type:[Number],
      default:100
    },
    height:{
      type:[Number],
      default:100
    }
  }
}
</script>

<style>

</style>
