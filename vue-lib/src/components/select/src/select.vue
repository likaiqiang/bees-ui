<template>
    <div class="ui-select dib">
        <a href="javascript:;" class="ui-select-button" @click="visible=!visible">
            <span class="ui-select-text">{{selectedText}}</span>
            <i class="ui-select-icon" aria-hidden="true"></i>
        </a>
        <div class="ui-select-datalist" v-show="visible">
            <a :class="['ui-select-datalist-li',item.disabled ? 'disabled' : null]"  v-for="(item,index) in list" :key="index" role="option" @click="clickHandler(index)">{{item.label}}</a>
        </div>
    </div>
</template>

<script>
export default {
    name:'ui-select',
    data(){
        return {
            visible:false,
            selectedValue:null,
            selectedText:'请选择'
        }
    },
    props:{
        list:{
            required:true,
            type:Array
        }
    },
    methods:{
        clickHandler(i){
            this.selectedValue = this.list[i].value
            this.selectedText = this.list[i].label
            this.visible = false
        }
    }
};
</script>

<style>
</style>
