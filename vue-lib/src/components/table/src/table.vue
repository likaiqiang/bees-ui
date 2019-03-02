<template>
    <table class="ui-table">
        <thead>
            <tr>
                  <th v-if="columns[0].type=='section'">
                        <ui-checkbox :value="false"></ui-checkbox>
                    </th>
                <th v-for="(item,index) in columns" :key="index">{{item.title}}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item,index) in dataSource" :key="index">
                <template>
                    <td v-if="columns[0].type=='section'">
                        <ui-checkbox :value="false"></ui-checkbox>
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
        
    },
    components:{
        checkbox
    },
    
};
</script>

<style>
</style>
