<template>
    <div class="dib">
        <div class="dib" 
            v-for="(item,index) in list"
            :key="index" :label="item.label" 
            >
            <input
                type="checkbox"
                :id="item.id"
                :value="item.value"
                :disabled="item.disabled"
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
                        disabled:item.componentOptions.propsData.disabled,
                        id:createId()
                    };
                });
        },
        val:{
            get(){
                return this.value
            },
            set(val){
                this.$emit('input',val)
                this.$emit('change',val)
            }
        }
    },
    methods:{
        createId
    },
    components:{
        
    },
    created(){
       
    }
};
</script>

<style>
</style>
