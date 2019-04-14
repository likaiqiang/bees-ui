<template>
  <div>
    <ui-table height="300px" :columns="columns" :dataSource="tableData"></ui-table>
    <ui-checkbox-group v-model="value">
  <ui-checkbox :value="1" label="男"></ui-checkbox>
  <ui-checkbox :value="2" label="女"></ui-checkbox>
</ui-checkbox-group>
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
      value:[1]
    };
  },
  methods:{
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
      uploadSuccess(){
        
      },
      sure(){
        console.log('sure')
      },
      cancle(){
        console.log('cancle')
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
