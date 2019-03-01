<template>
    <div class="dib">
        <ui-checkbox v-for="(item,index) in list" :key="index" :label="item.label" :_value="item.value" :value="value.indexOf(item.value)!=-1" @input="changeSelect" :disabled="item.disabled"></ui-checkbox>
    </div>
</template>

<script>
import { createId } from "@/utils/tools";
import checkbox from '../../checkbox/index.js'
export default {
    data(){
        return {
            
        }
    },
    name: "ui-checkbox-group",
    props: {
        value:{
            required:true,
            type:Array
        }
    },
    computed:{
        list(){
            return this.$slots.default.filter(item => {
                    return item.tag !== undefined;
                })
                .map(item => {
                    return {
                        value: item.componentOptions.propsData.value,
                        label: item.componentOptions.propsData.label,
                        disabled:item.componentOptions.propsData.disabled
                    };
                });
        }
    },
    methods:{
        changeSelect({value,_value}){
            var newArray = this.value.slice()
            var index = this.value.indexOf(_value)
            if(index !== -1){
                if(!value){
                    newArray.splice(index,1)
                }
                else{

                }
            }
            else{
                newArray.push(_value)
            }
            this.$emit('input',newArray)
        }
    },
    components:{
        [checkbox.name]:checkbox
    },
    created(){
       
    }
};
</script>

<style>
</style>
