<template>
  <div class="ui-swiper">
    <transition-group tag="ul" name="move" class="ui-swiper-wrapper" :style="{height:maxHeight+'px'}">
      <swiper-item  @height="getHeight(index,$event)" v-for="(item,index) in lists" :key="index" :content="item"></swiper-item>
    </transition-group>
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
    getHeight(i,e){
      this.$set(this.heights,i,e)
    }
  }
}
</script>

<style>

</style>
