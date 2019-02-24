<template>
    <div class="ui-select dib" :style="{width:width}">
        <a href="javascript:;" class="ui-select-button" @click="visible=!visible">
            <span class="ui-select-text">{{selectedText}}</span>
            <i class="ui-select-icon" aria-hidden="true"></i>
        </a>
        <div class="ui-select-datalist" v-show="visible">
            <a :class="['ui-select-datalist-li',item.disabled ? 'disabled' : null,value==item.value?'selected':null]"  v-for="(item,index) in list" :key="index" role="option" @click="clickHandler(index)">{{item.label}}</a>
        </div>
    </div>
</template>

<script>
export default {
    name:'ui-select',
    data(){
        return {
            visible:false
        }
    },
    props:{
        list:{
            required:true,
            type:Array
        },
        width:{
            type:String,
            default:'100px'
        },
        value:{
            type:[String,Number],
            required:true
        }
    },
    methods:{
        clickHandler(i){
            this.$emit('input',this.list[i].value)
            this.selectedText = this.list[i].label
            this.visible = false
        }
    },
    computed:{
        selectedText(){
            var target = this.list.find(item=>item.value === this.value)
            if(target) return target.label
            else return '请选择'
        }
    }
};
</script>

<style>
</style>
