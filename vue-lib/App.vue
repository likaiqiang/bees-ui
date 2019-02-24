<template>
  <div id="app">
    <ui-button @click="loading = !loading" :loading="loading" type="warning">button</ui-button>
    <ui-input v-model="value" :close="true"></ui-input>
    <ui-input width="450px" v-model="value" :close="true">
      <ui-button slot="append" type="primary">search</ui-button>
    </ui-input>
    <ui-date-picker></ui-date-picker>
    <ui-dialog :visible.sync="dialog" title="title">
      <div>
        content
      </div>
    </ui-dialog>
    <!-- <ui-switch v-model="checked" :disabled="false"></ui-switch> -->
    <ui-radio-group v-model="checked2" :list="list"></ui-radio-group>
    <ui-checkbox-group v-model="checked3" :list="list2"></ui-checkbox-group>
    <ui-select :list="list2" v-model="selected"></ui-select>
    <div>{{checked2}}</div>
    <!-- <ui-radio v-model="checked" :disabled="false"></ui-radio> -->
  </div>
</template>
<script>
import Button from "@/components/button/index.js";
import Input from "@/components/input/index.js";
import Icon from "@/components/icon/index.js";
import "@/components/datePicker/index.js";
import "@/components/dialog/index.js";
import '@/components/switch/index.js'
import '@/components/radio-group/index.js'
import '@/components/checkbox-group/index.js'
import '@/components/select/index.js'

export default {
  name: "app",
  data() {
    return {
      loading: false,
      value: "hello",
      dialog: true,
      checked: false,
      checked2: '2',
      list: [
        {
          label: "男”·",
          value: '1'
        },
        {
          label: "女",
          value: '2',
          disabled:true
        }
      ],
      list2:[
          {
              label:'label1',
              value:'1'
          },
          {
              label:'label2',
              value:'2'
          },
          {
              label:'label3',
              value:'3'
          },
          {
              label:'label4',
              value:'4'
          }
      ],
      checked3:['1','4'],
      selected:'3'
    };
  }
};
</script>

<style lang="scss">
@import "./src/styles/index.scss";
</style>
