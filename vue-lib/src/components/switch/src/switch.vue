<template>
    <div style="display:inline-block" @click="toggleCheck">
        <input :id="id" type="checkbox" :disabled="disabled" :checked="checked"><label :for="id" class="ui-switch"></label>
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
        checked:{
            type:Boolean,
            default:false
        },
        disabled:{
            type:Boolean,
            default:false
        }
    },
    methods:{
        toggleCheck(){
            if(!this.disabled)
                this.$emit('update:checked',!this.checked)
        }
    }
}
</script>

<style>

</style>
