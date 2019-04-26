<template>
    <div class="dib">
        <input
            ref="input"
            :id="id"
            type="checkbox"
            :disabled="disabled"
            v-model="val"
        ><label
            :for="id"
            class="ui-switch"
        ></label>
    </div>
</template>

<script>
import { createId } from "@/utils/tools";
export default {
    name: "ui-switch",
    data() {
        return {
            id: createId()
        };
    },
    props: {
        value: {
            type: Boolean,
            required: true
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        val: {
            get() {
                return this.value
            },
            set(val) {
                this.$emit('input',val)
            }
        }
    }
};
</script>

<style>
</style>
