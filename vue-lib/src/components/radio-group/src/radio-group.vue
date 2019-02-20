<template>
    <div class="dib">
        <ui-radio
            v-for="(item,index) in list"
            :key="index"
            :label="item.label"
            :value="item.value"
            :select.sync="val"
            :disabled="item.disabled"
        ></ui-radio>
    </div>
</template>

<script>
import Radio from './radio.vue'
export default {
    name: "ui-radio-group",
    props: {
        list: {
            type: Array,
            required: true
        },
        value: {
            type: String,
            required: true
        }
    },
    computed: {
        val:{
            get(){
                return this.value
            },
            set(val){
                this.$emit('input',val)
            }
        }
    },
    components:{
        [Radio.name]:Radio
    }
};
</script>

<style>
</style>
