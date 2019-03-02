<template>
    <table class="ui-table">
        <thead>
            <tr>
                <!-- <th v-if="columns[0].type=='section'">
                    <ui-checkbox v-model="isAllChecked"></ui-checkbox>
                </th> -->
                <th v-for="(item,index) in columns" :key="index">{{item.title}}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item,index) in dataSource" :key="index">
                <template>
                    <td v-if="columns[0].type=='section'">
                        <!-- <ui-checkbox @change="($event)=>{
                            console.log(this)
                        }"></ui-checkbox> -->
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
            isAllChecked:true
        }
    },
    components:{
        checkbox
    },
    methods:{
        checkChange(e,item,index){
            console.log(e,item,index)
        }
    }
    
};
</script>

<style>
</style>
