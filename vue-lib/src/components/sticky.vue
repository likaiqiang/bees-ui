<template>
    <div ref="stickyWrapper">
        <div ref="sticky" :style="styles">
            <slot></slot>
        </div>
    </div>   
</template>

<script>
export default {
    data(){
        return {
            sticky:false
        }
    },
    methods:{
        getElementHeight(){
            return this.$refs.stickyWrapper.getBoundingClientRect.height
        },
        getElementTop(){
            return this.$refs.stickyWrapper.getBoundingClientRect.top
        }
    },
    mounted(){
        var top = window.pageY + this.getElementTop()
        window.addEventListener('scroll',()=>{
            if(window.pageY > top){
                this.$refs.stickyWrapper.style.height = `${this.getElementHeight()}px`
                this.sticky = true
            }
            else{
                this.$refs.stickyWrapper.style.height = ''
                this.sticky = false
            }
        })
    },
    computed:{
        styles(){
           return this.sticky ? {
               position:'fixed',
               width:'100%'
           } : {}
        }
    }
}
</script>

<style lang="scss">

</style>
