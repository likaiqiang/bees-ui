<template>
    <table class="ui-table">
        <thead>
            <tr>
                <th v-if="columns[0].type=='section'">
                    <ui-checkbox @change="checkedAll" v-model="isAllChecked"></ui-checkbox>
                </th>
                <th v-for="(item,index) in columns" :key="index">{{item.title}}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item,index) in dataSource" :key="index">
                <template>
                    <td v-if="columns[0].type=='section'">
                        <ui-checkbox @change="checkedItem($event,item)" v-model="item._checked"></ui-checkbox>
                    </td>
                    <td v-for="(column,i) in columns" :key="i">{{item[column.key]}}</td>
                </template>
            </tr>
        </tbody>
    </table>
</template>

<script>
import checkbox from  '../../checkbox/index.js'
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
            this.$emit('select-change',item)
        }
    },
    computed:{
        isAllChecked:{
            get(){
                var arr = this.dataSource.filter(item=>{
                    return Boolean(item._checked) == false
                })

                return !arr.length
            },
            set(checked){
                if(checked){
                    this.dataSource.forEach(item=>{
                        this.$set(item,'_checked',true)
                    })
                }
                else{
                    this.dataSource.forEach(item=>{
                        this.$set(item,'_checked',false)
                    })
                }
            }
        }
    }
    
};
</script>

<style>
</style>
