<template>
  <div id="app">
    <ui-button @click="loading = !loading" :loading="loading" type="warning">button</ui-button>
    <ui-input v-model="value"></ui-input>
    <ui-icon type="md-heart-outline" color="red"/>
  </div>
</template>

<script>
import Button from '@/components/button/index.js'
import Input from '@/components/input/index.js'
import Icon from '@/components/icon/index.js'
console.log(Button)

export default {
  name: 'app',
  data(){
    return {
      loading:false,
      value:'hello'
    }
  }
}
</script>

<style lang="scss">
  @import './src/styles/index.scss'
</style>
