<template>
    <a href="javascript:" @click="$emit('click')" :disabled="disabled" :class="classes" role="button">
        <slot></slot>
    </a>
</template>
<script>
export default {
    props:{
        type:{
            type:String
        },
        disabled:{
            type:Boolean,
            default:false
        },
        loading:{
            type:Boolean,
            default:false
        }
    },
    computed:{
        classes(){
            return ['ui-button',this.type && `ui-button-${this.type}`,this.loading && 'loading']
        }
    }
}
</script>
<style lang="sass">

</style>


