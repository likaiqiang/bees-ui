<template>
  <div>
    <ui-button>click me</ui-button>
    <ui-dialog title="我是测试dialog" :visible.sync="dialogVisible">
        <div>我是测试内容</div>
    </ui-dialog>
  </div>
</template>

<script>
import {install} from './components/index.js'
import Vue from 'vue'

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
      dialogVisible:true,
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
      }
  }
};
</script>

<style lang="scss">
@import "./src/styles/index.scss";
</style>
