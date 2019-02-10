<template>
  <div id="app">
    <ui-button @click="loading = !loading" :loading="loading" type="warning">button</ui-button>
    <ui-input v-model="value" :close="true"></ui-input>
    <ui-input width="450px" v-model="value" :close="true">
      <ui-button slot="append" type="primary">search</ui-button>
    </ui-input>
    <!-- <ui-date-picker></ui-date-picker> -->
    <ui-dialog :visible.sync="dialog" title="title">
      <div>
        content
      </div>
    </ui-dialog>
  </div>
</template>
<script>
import Button from '@/components/button/index.js'
import Input from '@/components/input/index.js'
import Icon from '@/components/icon/index.js'
import '@/components/datePicker/index.js'
import '@/components/dialog/index.js'

export default {
  name: 'app',
  data(){
    return {
      loading:false,
      value:'hello',
      dialog:true
    }
  }
}
</script>

<style lang="scss">
  @import './src/styles/index.scss'
</style>
