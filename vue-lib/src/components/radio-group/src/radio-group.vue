<template>
    <div class="dib">
        <ui-radio 
            v-for="(item,index) in ls" 
            :key="index"
            :value="item.value"
            :disabled="item.disabled"
            @change="changeSelect"
            :selected="value"
        >    
        </ui-radio>
    </div>
</template>

<script>
import Radio from '../../radio/index.js'

export default {
    name: "ui-radio-group",
    props: {
        list: {
            type: Array,
            default: []
        },
        value:{
            required:true,
            type:[Number,String]
        }
    },
    computed: {
        ls() {
            var arr = this.list.slice();
            arr.forEach(item => {
                this.$set(item, "id", createId());
            });
            return arr;
        }
    },
    components:{
        [Radio.name]:Radio
    },
    methods:{
        changeSelect(val){
            this.$emit('input',val)
        }
    }
};
</script>

<style>
</style>
