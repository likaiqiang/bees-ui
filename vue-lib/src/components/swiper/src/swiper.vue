<template>
  <div class="ui-swiper">
    <transition-group tag="ul" name="move" class="ui-swiper-wrapper">
      <swiper-item v-for="(item,index) in lists" :key="index" :content="item"></swiper-item>
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
  computed:{
    lists(){
      return this.$slots.default.filter(item => {
          return item.tag !== undefined;
      }).map(item=>{
        return item.componentOptions.children
      })
    }
  }
}
</script>

<style>

</style>
