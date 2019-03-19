<template>
  <div class="ui-swiper">
    <transition-group tag="ul" name="move" class="ui-swiper-wrapper" :style="{height:maxHeight+'px'}">
      <swiper-item  @load="getHeight" v-show="index==currentIndex"  v-for="(item,index) in lists" :key="index" :content="item"></swiper-item>
    </transition-group>
    <ul class="ui-swiper-panation">
      <li v-for="(item,index) in lists" :key="index" @click="toggle(index)"></li>
    </ul>
  </div>
</template>

<script>
import swiperItem from './swiper-item.vue'
export default {
  name:'ui-swiper',
  components:{
    swiperItem
  },
  data(){
    return {
      currentIndex:0,
      heights:[]
    }
  },
  computed:{
    lists(){
      return this.$slots.default.filter(item => {
          return item.tag !== undefined;
      }).map(item=>{
        return item.componentOptions.children
      })
    },
    maxHeight(){
      return Math.max.apply(null,this.heights)
    }
  },
  methods:{
    toggle(index){
      this.currentIndex = index
    },
    getHeight(height){
      this.heights.push(height)
    }
  },
  mounted(){
  
  }
}
</script>

<style>

</style>
