<template>
  <div class="dib">
    <svg :width="width" :height="height" viewbox="0 0 440 440">
      <circle cx="220" cy="220" r="170" stroke-width="50" stroke="#D1D3D7" fill="none"></circle>
      <circle cx="220" cy="220" r="170" stroke-width="50" stroke="#00A5E0" fill="none" transform="matrix(0,-1,1,0,0,440)" :stroke-dasharray="value+' '+1069"></circle>
    </svg>
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
      type:[String,Number],
      default:440
    },
    height:{
      type:[String,Number],
      default:440
    }
  }
}
</script>

<style>

</style>
