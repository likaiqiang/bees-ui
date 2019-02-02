<template>
    <div v-click-outside="hide" style="display:inline-block">
        <ui-input ref="input" @focus="focus" v-model="value"></ui-input>
        <div ref="panels" class="date-picker-panels" v-show="visible">
            <div class="date-picker-years" v-if="mode=='year'">
                date-picker-years
            </div>
            <div class="date-picker-months" v-else-if="mode == 'month'">
                date-picker-months
            </div>
            <div class="date-picker-days" v-else>
                date-picker-days
            </div>
        </div>
    </div>
</template>

<script>
import ClickOutside from "vue-click-outside";
import '@/components/input/index.js'
import Follow from '@/utils/follow.js'
export default {
  name: "ui-date-picker",
  data(){
      return {
          value:'123',
          visible:false,
          mode:'year'
      }
  },
  mounted(){
      Follow(this.$refs.input.$el,this.$refs.panels)
  },
  directives: {
    ClickOutside
  },
  methods:{
      hide(){
          this.visible = false
      },
      focus(){
          this.visible = true
      }
  }
}
</script>

<style>
</style>
