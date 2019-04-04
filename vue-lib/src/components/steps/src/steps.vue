<template>
  <div class="ui-steps ui-steps-horizontal">
    <div class="ui-steps-item ui-steps-status-finish" v-for="(item,index) in list" :key="index">
      <div class="ui-steps-head">
        <template v-if="current == index">
          <Icon type="md-checkmark"></Icon>
        </template>
        <template v-else>
          {{index}}
        </template>
      </div>
      <div class="ui-steps-main">
        <div class="ui-steps-title">{{item.title}}</div> 
        <div class="ui-steps-content">{{item.content}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '../../icon'
export default {
  name:'ui-steps',
  components:{
    Icon
  },
  computed:{
    list(){
      return this.$slots.default.filter(item=>{
        return /ui-step/.test(item.tag)
      }).map(item=>{
        return {
          title:item.componentOptions.propsData.title,
          content:item.componentOptions.propsData.content
        }
      })
    }
  },
  mounted(){
    console.log(this.$slots.default)
  },
  props:{
    current:{
      type:Number,
      default:0
    }
  }
}
</script>

<style>

</style>
