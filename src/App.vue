<template>
  <div>
    <ui-table height="300px" :columns="columns" :dataSource="tableData"></ui-table>
    <ui-checkbox-group v-model="value">
  <ui-checkbox :value="1" label="男"></ui-checkbox>
  <ui-checkbox :value="2" label="女"></ui-checkbox>
</ui-checkbox-group>
  <ui-tag @close="tagClose" :checked.sync="item.checked" :color="item.color" :closable="item.closable" v-for="(item,index) in tags" :key="index" :name="item.name">
    {{item.label}}
  </ui-tag>
  <ui-tooltip type="hover" content="123">
    <ui-button>hover me</ui-button>
  </ui-tooltip>
  <ui-tooltip type="click" :content="content">
    <ui-button>click me</ui-button>
  </ui-tooltip>
  <ui-upload :on-success="uploadSuccess" accept="image/x-png,image/gif,image/jpeg">
    <ui-button type="success">点我上传</ui-button>
  </ui-upload>
  <img style="width:200px" :src="`https://upload-11.herokuapp.com/preview/${imgId}`">
  </div>
</template>

<script>
import {install} from './components/index.js'
import Vue from 'vue'

var Mock = require('mockjs')

var imgs = []

for(var i=0;i<4;i++){
  imgs[i] = Mock.Random.image( '200x100', Mock.Random.hex() )
}

Vue.use(install)

export default {
  name: "app",
  data() {
    return {
      loading:false,
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
              title:'ID',
              key:'id',
              maxWidth:200,
              minWidth:100
          },
          {
              title:'姓名',
              key:'name',
              align:'center'
          },
          {
              title:'性别',
              key:'gender'
          },
          {
              title:'年龄',
              key:'age'
          }
      ],
      value:[1],
      tags:[
        {
          checked:true,
          closable:true,
          color:'default',
          name:'1',
          label:'标签一'
        },
        {
          checked:true,
          closable:true,
          color:'primary',
          name:'2',
          label:'标签二'
        },
        {
          checked:true,
          closable:true,
          color:'success',
          name:'3',
          label:'标签三'
        },
        {
          checked:true,
          closable:true,
          color:'blue',
          name:'4',
          label:'标签四'
        },
        {
          checked:true,
          closable:true,
          color:'error',
           name:'5',
          label:'标签五'
        }
      ],
      imgId:''
    };
  },
  methods:{
    uploadSuccess(res,file,filelist){
      this.imgId = res
    },
      tagClose(name){
        console.log('name',name)
      },
      label(h){
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
      },
      showDialog(){
          this.$Modal({
              title:"我是动态添加的"
          })
      },
      showMessage(){
          this.$Message({
              type:'error',
              content:'修改失败'
          })
      },
      clickHandler4(){
        this.loading = !this.loading
      },
      sure(){
        console.log('sure')
      },
      cancle(){
        console.log('cancle')
      },
      content(){
        return (
          <div>
            我是自定义content
          </div>
        )
      }
  },
  mounted(){
    setTimeout(()=>{
      console.log('loading changed')
      this.loading = !this.loading
    },6000)
  }
};
</script>

<style lang="scss">

</style>
