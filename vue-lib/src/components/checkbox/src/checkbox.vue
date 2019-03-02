<template>
    <div class="dib">
        <input
            type="checkbox"
            :id="id"
            :value="value"
            :disabled="disabled"
            v-model="isChecked"   
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
            required:true
        },
        label:{
            
        },
        disabled:{
            type:Boolean,
            default:false
        },
        selected:{
            type:Array,
            default:()=>{
                return []
            }
        }
    },
    computed:{
        isChecked:{
            get(){
                if( this.selected.length){
                    return this.selected.indexOf(this.value) !== -1
                }
                else return false
            },
            set(checked){
                this.$emit('change',{
                    value:this.value,
                    checked:checked
                })
            }
        }
    },
    created(){
        
    }
}
</script>

<style>

</style>
