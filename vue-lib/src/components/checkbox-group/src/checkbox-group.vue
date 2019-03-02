<template>
    <div class="dib">
        <ui-checkbox 
            v-for="(item,index) in list" 
            :key="index" :label="item.label" 
            :value="item.value"
            :disabled="item.disabled"
            @change="changeSelect"
            :selected="value">
        </ui-checkbox>
    </div>
</template>

<script>
import { createId } from "@/utils/tools";
import checkbox from '../../checkbox/index.js'
import bus from '@/utils/bus.js'
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
        changeSelect(o){
            var {checked,value} = o,
                newArray = this.value.slice(),
                index = this.value.indexOf(value)
            if(index !== -1){
                if(!checked){
                    newArray.splice(index,1)
                }
                else{

                }
            }
            else{
                newArray.push(value)
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
