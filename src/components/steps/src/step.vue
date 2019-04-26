<template>
  
</template>

<script>
export default {
  name:'ui-step',
  props:{
    title:{
      type:String,
      required:true
    },
    content:{
      type:[String,Function],
      required:true
    }
  }
}
</script>

<style>

</style>
