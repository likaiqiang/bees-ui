<template>
  <div id="app">
    <ui-button @click="loading = !loading" :loading="loading" type="warning">button</ui-button>
    <ui-input v-model="value" :close="true"></ui-input>
    <ui-input width="450px" v-model="value" :close="true">
      <ui-button slot="append" type="primary">search</ui-button>
    </ui-input>
    <ui-date-picker></ui-date-picker>
    <!-- <ui-dialog :visible.sync="dialog" title="title">
      <div>
        content
      </div>
    </ui-dialog> -->
    <ui-switch v-model="checked" :disabled="false"></ui-switch>
    <span>{{checked}}</span>
    <!-- <ui-radio v-model="checked" :disabled="false"></ui-radio> -->
  </div>
</template>
<script>
import Button from '@/components/button/index.js'
import Input from '@/components/input/index.js'
import Icon from '@/components/icon/index.js'
import '@/components/datePicker/index.js'
import '@/components/dialog/index.js'
import '@/components/switch/index.js'
import '@/components/radio/index.js'

export default {
  name: 'app',
  data(){
    return {
      loading:false,
      value:'hello',
      dialog:true,
      checked:false
    }
  }
}
</script>

<style lang="scss">
  @import './src/styles/index.scss';
</style>
