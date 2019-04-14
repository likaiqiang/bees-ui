<template>
    <div class="ui-table-wrapper" :style="{height:this.height}">
        <div class="ui-table-head">
            <table class="ui-table">
                <thead>
                    <tr>
                        <th ref="th" v-if="columns[0].type=='section'" :style="{'text-align':columns[0].align}">
                            <ui-checkbox  @change="checkedAll" v-model="isAllChecked"></ui-checkbox>
                        </th>
                        <th ref="th" v-for="(item,index) in rColumns" :key="index" :colspan="item.colspan" :style="{'text-align':item.align}">{{item.title}}</th>
                        <th v-if="height!='auto'" :style="{width:scrollBarWidth()+'px',padding:0}"></th>
                    </tr>
                </thead>
            </table>
        </div>
        <div class="ui-table-body">
            <table  class="ui-table">
                <tbody>
                    <tr v-for="(item,index) in dataSource" :key="index">
                        <template>
                            <td v-if="columns[0].type=='section'" :style="{'text-align':columns[0].align}">
                                <ui-checkbox :disabled="item._disabled" @change="checkedItem($event,item)" v-model="item._checked"></ui-checkbox>
                            </td>
                            <td v-for="(column,i) in rColumns" :key="i" :colspan="column.colspan" :style="{'text-align':column.align}">{{item[column.key]}}</td>
                        </template>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import checkbox from  '../../checkbox/index.js'
import scrollBarWidth from '@/utils/scrollbar-width.js'
export default {
    name: "ui-table",
    props: {
        columns: {
            type: Array,
            required: true
        },
        dataSource: {
            type: Array,
            required: true
        },
        height:{
            type:String,
            default:'auto'
        }
    },
    data(){
        return {
           
        }
    },
    components:{
        checkbox
    },
    methods:{
        checkedAll(){
            this.$emit('select-all',this.dataSource)
        },
        checkedItem(e,item){
            if(e){
                this.$emit('select',this.dataSource.filter(item=>Boolean(item._checked)))
            }
            this.$emit('select-change',item)
        },
        scrollBarWidth
    },
    computed:{
        isAllChecked:{
            get(){
                var checkedArr = this.dataSource.filter(item=>{
                    return Boolean(item._checked) == true
                })

                var disabledArr = this.dataSource.filter(item=>{
                  return item._disabled
                })
                return checkedArr.length + disabledArr.length == this.dataSource.length
            },
            set(checked){
                if(checked){
                    this.dataSource.forEach(item=>{
                      if(!item._disabled)
                        this.$set(item,'_checked',true)
                    })
                }
                else{
                    this.dataSource.forEach(item=>{
                        if(!item._disabled)
                          this.$set(item,'_checked',false)
                    })
                }
            }
        },
        rColumns(){
            return this.columns.filter(item=>{
                return typeof item.type === 'undefined'
            })
        }
    }
};
</script>

<style>
</style>
