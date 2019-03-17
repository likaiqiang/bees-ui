<template>
  <div class="ui-swiper">
    <transition-group tag="ul" name="move" class="ui-swiper-wrapper" :style="{height:maxHeight+'px'}">
      <swiper-item v-show="index==currentIndex"  @height="getHeight(index,$event)" v-for="(item,index) in lists" :key="index" :content="item"></swiper-item>
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
      heights:[],
      currentIndex:0
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
    getHeight(i,e){
      this.$set(this.heights,i,e)
    },
    toggle(index){
      this.currentIndex = index
    }
  }
}
</script>

<style>

</style>
