<template>
  <div id="app">
    <ui-button @click="loading = !loading" :loading="loading" type="warning">button</ui-button>
    

  
  </div>
</template>

<script>
import Button from '@/components/button/index.js'
import Input from '@/components/input/index.js'
console.log(Button)

export default {
  name: 'app',
  data(){
    return {
      loading:false
    }
  }
}
</script>

<style lang="scss">
  @import './src/styles/index.scss'
</style>
