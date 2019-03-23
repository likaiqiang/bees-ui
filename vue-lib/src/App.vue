<template>
  <div>
    <!-- <ui-tooltip content="我是content">
      <ui-button type="success" @click="dialogVisible=true">click me</ui-button>
    </ui-tooltip> -->
    <ui-dialog title="我是测试dialog" :visible.sync="dialogVisible">
        <div>我是测试内容</div>
    </ui-dialog>
    <ui-swiper>
      <ui-swiper-item v-for="(item,index) in imgs" :key="index">
        <img :src="item">
      </ui-swiper-item>
    </ui-swiper>
    <ui-slider v-model="slider"></ui-slider>
    <ui-icon type="md-bug" />
    <!-- <ui-loading :small="true" v-model="loading"></ui-loading> -->
    <div v-loading.small="loading" style="height:100px;border:1px solid"></div>
    <ui-button @click="loading=!loading">click</ui-button>
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
      slider:50,
      curPage:4,
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
      imgs:imgs
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
