<template>
  <div class="ui-progress-wrapper">
    <div class="ui-progress" ref="progress">
      <div class="ui-progress-inner" :style="{width:curWidth+'px',backgroundColor:bgColor}"></div>
    </div>
    <div class="ui-progress-extra">
      {{`${this.value}%`}}
    </div>
  </div>
</template>

<script>
export default {
  name:'ui-progress',
  data(){
    return {
      progressWidth:0
    }
  },
  props:{
    value:{
      type:Number,
      default:10
    },
    color:{
      type:String,
      default:'primary',
      validator:function(value){
          return ['primary','success','warning'].indexOf(value) != -1
      }
    }
  },
  mounted(){
    this.progressWidth = this.$refs.progress.getBoundingClientRect().width 
    console.log(this.progressWidth)
  },
  computed:{
    curWidth(){
      return this.progressWidth * (this.value/100)
    },
    bgColor(){
      const params = {
        'primary':'#2486ff',
        'success':'#01cf97',
        'warning':'#f4615c'
      }
      return params[this.color]
    }
  }
}
</script>

<style>

</style>
