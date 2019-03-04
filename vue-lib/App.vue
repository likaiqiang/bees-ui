<template>
  <div id="app">
    <!-- <ui-checkbox v-model="checked"></ui-checkbox> -->
    <ui-checkbox-group v-model="checked3">
        <ui-checkbox v-for="(item,index) in list2" :label="item.label" :value="item.value" :key="index"></ui-checkbox>
    </ui-checkbox-group>
    <div>{{checked3}}</div>
    <ui-table height="300px" :columns="columns" :dataSource="tableData"></ui-table>
    <!-- <ui-radio v-model="checked" :disabled="false"></ui-radio> -->
    <ui-button @click="all(true)">全选</ui-button>
    <ui-button @click="all(false)">反选</ui-button>
    <ui-button type="primary" @click="openDialog">open</ui-button>
    <ui-dialog title="我是测试dialog" :visible.sync="dialogVisible">
        <div>我是测试内容</div>
    </ui-dialog>
  </div>
</template>
<script>
import Vue from 'vue'
import DomPortal from 'vue-dom-portal'
Vue.use(DomPortal)


import Button from "@/components/button/index.js";
import Input from "@/components/input/index.js";
import Icon from "@/components/icon/index.js";
import "@/components/datePicker/index.js";
import "@/components/dialog/index.js";
import '@/components/switch/index.js'
import '@/components/radio-group/index.js'
import '@/components/checkbox/index.js'
import '@/components/checkbox-group/index.js'
import '@/components/select/index.js'
import '@/components/tabs/index.js'
import '@/components/table/index.js'
import '@/components/dialog/index.js'

export default {
  name: "app",
  data() {
    return {
      loading: false,
      value: "hello",
      dialog: true,
      checked: true,
      checked2: '2',
      dialogVisible:false,
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
      checked3:['1','4','3'],
      selected:'3',
      curTab:'likaiqiang',
      tableData:[
          {
              id:1,
              name:'likaiqiang',
              age:24,
              gender:'男',
              _checked:true
          },
          {
              id:2,
              name:'寻志斌',
              age:24,
              gender:'男',
              _disabled:true
          },{
              id:3,
              name:'shikefeng',
              age:24,
              gender:'男'
          },
          {
              id:4,
              name:'likaiqiang',
              age:24,
              gender:'男',
              _checked:true
          },
          {
              id:5,
              name:'寻志斌',
              age:24,
              gender:'男',
              _disabled:true
          },{
              id:6,
              name:'shikefeng',
              age:24,
              gender:'男'
          },{
              id:7,
              name:'likaiqiang',
              age:24,
              gender:'男',
              _checked:true
          },
          {
              id:8,
              name:'寻志斌',
              age:24,
              gender:'男',
              _disabled:true
          },{
              id:9,
              name:'shikefeng',
              age:24,
              gender:'男'
          }
      ],
      columns:[
          {
              type:'section'
          },
          {
              title:'ID',
              key:'id',
              colspan:'2'
          },
          {
              title:'姓名',
              key:'name'
          },
          {
              title:'性别',
              key:'gender'
          },
          {
              title:'年龄',
              key:'age'
          }
      ]
    };
  },
  methods:{
      label(){
          return (
              <div>
                <span>1</span>
                <span>2</span>
              </div>
          )
      },
      all(status){
          if(status){
              this.tableData.forEach(item=>{
                this.$set(item,'_checked',true)
            })
          }
          else{
              this.tableData.forEach(item=>{
                this.$set(item,'_checked',false)
            })
          }
      },
      openDialog(){
          this.dialogVisible = true
      }
  }
};
</script>

<style lang="scss">
@import "./src/styles/index.scss";
</style>
