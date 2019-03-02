<template>
  <div id="app">
    <!-- <ui-checkbox v-model="checked"></ui-checkbox> -->
    <ui-checkbox-group v-model="checked3">
        <ui-checkbox v-for="(item,index) in list2" :label="item.label" :value="item.value" :key="index"></ui-checkbox>
    </ui-checkbox-group>
    <div>{{checked3}}</div>
    <ui-table :columns="columns" :dataSource="tableData"></ui-table>
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
import '@/components/checkbox/index.js'
import '@/components/checkbox-group/index.js'
import '@/components/select/index.js'
import '@/components/tabs/index.js'
import '@/components/table/index.js'

export default {
  name: "app",
  data() {
    return {
      loading: false,
      value: "hello",
      dialog: true,
      checked: true,
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
      checked3:['1','4','3'],
      selected:'3',
      curTab:'likaiqiang',
      tableData:[
          {
              id:1,
              name:'likaiqiang',
              age:24,
              gender:'男'
          },
          {
              id:2,
              name:'寻志斌',
              age:24,
              gender:'男'
          },{
              id:3,
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
              key:'id'
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
      }
  }
};
</script>

<style lang="scss">
@import "./src/styles/index.scss";
</style>
