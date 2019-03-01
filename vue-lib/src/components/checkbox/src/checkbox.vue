<template>
    <div class="dib">
        <input
            type="checkbox"
            :id="id"
            v-model="val"
            :disabled="disabled"
        >
        <label
            :for="id"
            class="ui-checkbox"
        ></label>
        <label :for="id">{{label}}</label>
    </div>
</template>

<script>
import { createId } from "@/utils/tools";
export default {
    name:'ui-checkbox',
    data(){
        return {
            id:createId()
        }
    },
    props:{
        value:{
            required:true,
            type:Boolean
        },
        _value:{
            
        },
        label:{
            
        },
        disabled:{
            type:Boolean,
            default:false
        }
    },
    computed:{
        val:{
            get(){
                return this.value
            },
            set(val){
                this.$emit('input',{
                    value:val,
                    _value:this._value
                })
            }
        }
    }
}
</script>

<style>

</style>
