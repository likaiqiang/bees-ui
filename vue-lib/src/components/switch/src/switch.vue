<template>
    <div style="display:inline-block">
        <input ref="input" :id="id" type="checkbox" :disabled="disabled" :checked="value"><label :for="id" class="ui-switch"></label>
    </div>
</template>

<script>
import {createId} from '@/utils/tools'
export default {
    name:'ui-switch',
    data(){
        return {
            id: createId()
        }
    },
    props:{
        value:{
            type:Boolean,
            required:true
        },
        disabled:{
            type:Boolean,
            default:false
        }
    },
    mounted(){
        this.$refs.input.addEventListener('change',()=>{
            if(!this.disabled)
                this.$emit("input", !this.value);
        })
    }
}
</script>

<style>

</style>
