<template>
  <div class="ui-steps">
    <div :class="getItemClasses(index)" v-for="(item,index) in list" :key="index">
      <div class="ui-steps-head">
        <template v-if="current > index">
          <Icon color="#2486ff" type="md-checkmark"></Icon>
        </template>
        <template v-else>
          {{index}}
        </template>
      </div>
      <div class="ui-steps-main">
        <div class="ui-steps-title">{{item.title}}</div> 
        <div class="ui-steps-content">
          <template v-if="typeof item.content != 'function'">
            {{item.content}}
          </template>
          <Render v-else :render="item.content"></Render>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '../../icon'
import Render from '@/utils/render.js'
export default {
  name:'ui-steps',
  components:{
    Icon,
    Render
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
  methods:{
    getItemClasses(index){
      return [
        'ui-steps-item',
        {
          'ui-steps-status-finish':index < this.current,
          'ui-steps-status-wait':index > this.current,
          'ui-steps-status-process':index == this.current
        }
      ]
    }
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
