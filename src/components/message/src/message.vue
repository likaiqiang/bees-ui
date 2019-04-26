<template>
    <div
        :class="classes"
    >
        <template v-if="typeof content !== 'function'">
            <i class="ui-lightip-icon">&nbsp;</i>
            <span class="ui-lightip-text">{{content}}</span>
        </template>
        <Render v-else :render="content"></Render>
    </div>
</template>

<script>
import Render from '@/utils/render.js'
export default {
    name:'ui-message',
    props:{
        content:{
            type:[String,Function],
            required:true
        },
        type:{
            type:String,
            default:'success',
            validator:function(val){
                return ['success','error'].indexOf(val) !== -1
            }
        },
        duration:{
            type:Number,
            default:1000
        }
    },
    created(){
        setTimeout(()=>{
            this.$emit('close')
        },this.duration)
    },
    components:{
        Render
    },
    computed:{
        classes(){
            return ['ui-lightip','ui-lightip-'+this.type]
        }
    }
};
</script>

<style>
</style>
