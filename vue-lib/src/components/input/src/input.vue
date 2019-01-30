<template>
    <div class="ui-input-wrapper">
        <input :type="type" :value="value" :placeholder="placeholder" required class="ui-input" @input="$emit('input', $event.target.value)">
    </div>
</template>

<script>
export default {
    name:'ui-input',
    props:{
        value:{
            required:true
        },
        placeholder:{
            type:String,
            default:'请输入用户名'
        },
        type:{
            type:String,
            default:'text'
        }
        // rules:{
        //     type:Array
        // }
    },
    data(){
        return {
            rules:[
                {
                    required:true,
                    message:'请输入手机号'
                },
                {
                    test:/^1[3|4|5|7|8][0-9]{9}$/,
                    message:'请输入合法的手机号'
                }
            ]
        }
    }
}
</script>
