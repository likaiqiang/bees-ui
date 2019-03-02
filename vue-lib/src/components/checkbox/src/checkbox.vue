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
            
        },
        label:{
            
        },
        disabled:{
            type:Boolean,
            default:false
        },
        selected:{
            type:[Array,Boolean],
            default:false
        }
    },
    computed:{
        isChecked:{
            get(){
                if( this.selected instanceof Array){
                    return this.selected.indexOf(this.value) !== -1
                }
                else return selected
            },
            set(checked){
                if(this.selected instanceof Array){
                    this.$emit('change',{
                        value:this.value,
                        checked:checked
                    })
                }
                else{
                    this.$emit('change',checked)
                }
            }
        }
    },
    created(){
        
    }
}
</script>

<style>

</style>
