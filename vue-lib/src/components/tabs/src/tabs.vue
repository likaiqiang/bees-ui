<template>
    <div>
        <ui-tab-head></ui-tab-head>
        <ui-tab-body></ui-tab-body>
    </div>
</template>

<script>
import Velocity from 'velocity-animate'
import tabHead from './tab-head.vue'
import tabBody from './tab-body.vue'
//实现思路：拆解tabs传来的slot，分别渲染head与body组件
export default {
    name:'ui-tabs',
    data(){
        return {
            
        }
    },
    components:{
        [tabHead.name]:tabHead,
        [tabBody.name]:tabBody
    },
    props:{
        value:{
            type:String,
            required:true
        }
    },
    computed:{
        len(){
            return this.$slots.default.filter(item=>{
                return typeof item.tag !== 'undefined'
            }).length
        }
    }
}
</script>

<style>

</style>
