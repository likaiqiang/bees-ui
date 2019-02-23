<template>
    <div class="dib">
        <div class="dib" v-for="(item,index) in ls" :key="index">
            <input
                ref="input"
                type="radio"
                :id="item.id"
                :disabled="item.disabled"
                :value="item.value"
                v-model="val"
            >
            <label
                :for="item.id"
                class="ui-radio"
            ></label>
            <label :for="item.id">{{item.label}}</label>
        </div>
    </div>
</template>

<script>
import { createId } from "@/utils/tools";
export default {
    name: "ui-radio-group",
    props: {
        list: {
            type: Array,
            default: []
        },
        value:{
            required:true,
            type:Array
        }
    },
    computed: {
        val: {
            get() {
                return this.value;
            },
            set(val) {
                this.$emit("input", val);
            }
        },
        ls() {
            var arr = this.list.slice();
            arr.forEach(item => {
                this.$set(item, "id", createId());
            });
            return arr;
        }
    }
};
</script>

<style>
</style>
