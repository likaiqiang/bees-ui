<template>
  <div class="dib">
    <input ref="input" type="radio" :id="id" :disabled="disabled" :value="value" v-model="sele">
    <label :for="id" class="ui-radio"></label>
    <label :for="id">{{label}}</label>
  </div>
</template>

<script>
import { createId } from "@/utils/tools";
export default {
  name: "ui-radio",
  data() {
    return {
      id: createId()
    };
  },
  props: {
    value: {
      type: [String,Number],
      required: true
    },
    label: {
      type: String,
      required: true
    },
    disabled:{
        type:Boolean,
        default:false
    },
    select:{
        type:[String,Number],
        required:true
    }
  },
  computed:{
      sele:{
          get(){
              return this.select
          },
          set(val){
              this.$emit('update:select',val)
          }
      }
  }
};
</script>

<style>
</style>
