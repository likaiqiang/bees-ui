<template>
    <div class="dib">
        <div class="dib" v-for="(item,index) in ls" :key="index">
            <input
                type="checkbox"
                :id="item.id"
                :value="item.value"
                v-model="val"
            >
            <label
                :for="item.id"
                class="ui-checkbox"
            ></label>
            <label :for="item.id">{{item.label}}</label>
        </div>
    </div>
</template>

<script>
import { createId } from "@/utils/tools";
export default {
    data(){
        return {
            
        }
    },
    name: "ui-checkbox-group",
    props: {
        list: {
            type: Array,
            default: []
        },
        value:{
            required:true,
            type:Array
        }
    },
    computed:{
        ls(){
            var arr = this.list.slice()
            arr.forEach(item=>{
                this.$set(item,'id',createId())
            })
            return arr
        },
        val:{
            get(){
                return this.value
            },
            set(val){
                this.$emit('input',val)
            }
        }
    },
    methods:{
        createId
    }
};
</script>

<style>
</style>
