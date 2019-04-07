<template>
  <div>
    <ui-progress :value="sliderValue">
      
    </ui-progress>
    <ui-upload :on-success="uploadSuccess" action="https://upload-11.herokuapp.com/upload">
      <ui-button>点我上传</ui-button>
    </ui-upload>
    <ui-date-picker></ui-date-picker>
    <ui-input value="123" width="300px" close radius="5px" placeholder="请输入合法内容"></ui-input>
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
      disabled:false,
      value: false,
      inputValue:'123',
      checked:[1,3],
      selectedValue:1,
      sliderValue:20,
      list:[
        {
          label:'选项一',
          value:1,
          disabled:false
        },
        {
          label:'选项二',
          value:2,
          disabled:true
        },
        {
          label:'选项三',
          value:3,
          disabled:false
        }
      ],
      steps:[
        {
          title:'title1',
          content:'content1'
        },
        {
          title:'title2',
          content:'content2'
        },
        {
          title:'title3',
          content:'content3'
        },
        {
          title:'title4',
          content:'content4'
        }
      ]
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
        debugger
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
