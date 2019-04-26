<template>
    <a href="javascript:" @click="$emit('click',$event.target)" :class="buttonClass" role="button">
        <slot></slot>
    </a>
</template>

<script>
export default {
    name:'ui-button',
    props:{
        type:{
            type:String,
            validator:function(value){
                return ['primary','success','warning',''].indexOf(value) != -1
            }
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
        buttonClass(){
            return ['ui-button',this.type && 'ui-button-'+this.type,this.disabled && 'disabled',this.loading && 'loading']
        }
    }
}
</script>

