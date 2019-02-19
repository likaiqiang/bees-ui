<template>
  <div style="display:inline-block" @click="change">
    <input type="radio" :id="id">
    <label :for="id" class="ui-radio"></label>
    <label :for="id">{{label}}</label>
  </div>
</template>

<script>
import { createId } from "@/utils/tools";
export default {
  name:'ui-radio',
  data() {
    return {
      id: createId(),
    }
  },
  props:{
      value:{
          type:Boolean,
          required:true
      },
      label:{
          type:String,
          required:true
      }
  },
  methods:{
      change(){
          this.$emit('input',true)
      }
  }
};
</script>

<style>
</style>
