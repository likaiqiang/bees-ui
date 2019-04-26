<template>
    <div class="dib">
        <input
            type="radio"
            :id="id"
            :disabled="disabled"
            :value="value"
            v-model="isChecked"
        >
        <label
            :for="id"
            class="ui-radio"
        ></label>
        <label :for="id">{{label}}</label>
    </div>
</template>

<script>
import { createId } from "@/utils/tools";
export default {
    name:'ui-radio',
    data(){
        return {
            id:createId()
        }
    },
    props:{
        selected:{
            type:[String,Number],
        },
        value:{
            required:true
        },
        label:{
            
        },
        disabled:{
            type:Boolean,
            default:false
        },
    },
    computed:{
        isChecked:{
            get(){
                if(typeof this.selected !== 'undefined'){
                    return this.selected
                }
                else return this.value
            },
            set(val){
                this.$emit('change',val)
                this.$emit('input',val)
            }
        }
    }
}
</script>

<style>

</style>
