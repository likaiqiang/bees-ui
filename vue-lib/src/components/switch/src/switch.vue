<template>
    <div style="display:inline-block" @click="toggleCheck">
        <input type="checkbox" :disabled="disabled" :checked="checked"><label class="ui-switch"></label>
    </div>
</template>

<script>
export default {
    name:'ui-switch',
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
