<template>
    <table class="ui-table">
        <thead>
            <tr>
                 <th v-if="columns[0].type=='section'">
                    ui-check
                 </th>
                <th v-for="(item,index) in columns" :key="index">{{item.title}}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item,index) in dataSource" :key="index">
                <template>
                    <td v-if="columns[0].type=='section'">

                    </td>
                    <td v-for="(column,i) in columns" :key="i">{{item[column.key]}}</td>
                </template>
            </tr>
        </tbody>
    </table>
</template>

<script>
import '../../checkbox-group/index.js'
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
    }
};
</script>

<style>
</style>
