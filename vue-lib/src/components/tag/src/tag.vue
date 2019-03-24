<template>
  <div :class="classes" @click="TagClick" v-if="visible">
    <span class="ui-tag-text">
      <slot></slot>
    </span>
    <ui-icon v-if="closable" @click.stop="closeHandler" type="ios-close"></ui-icon>
  </div>
</template>

<script>
const initColorList = ['default', 'primary', 'success', 'warning', 'error', 'blue', 'green', 'red', 'yellow', 'pink', 'magenta', 'volcano', 'orange', 'gold', 'lime', 'cyan', 'geekblue', 'purple'];
import Icon from '../../icon/index.js'
export default {
  name:'ui-tag',
  data(){
    return {
      visible:true
    }
  },
  props:{
    closable:{
      type:Boolean,
      default:false
    },
    checked:{
      type:Boolean,
      default:false
    },
    border:{
      type:Boolean,
      default:false
    },
    color:{
      type:String,
      validator(val){
        return initColorList.indexOf(val)!==-1
      },
      default:'defult'
    },
    name:{
      type:[Number,String]
    }
  },
  computed:{
    classes(){
      return [
        'ui-tag',
        `ui-tag-${this.color}`,
        this.closable ? 'ui-tag-closable' : '',
        this.checked ? '' : 'ui-tag-border',
        this.dot ? 'ui-tag-dot': ''
      ]
    }
  },
  components:{
    [Icon.name]:Icon
  },
  methods:{
    TagClick(){
      this.$emit('update:checked',!this.checked)
      this.$emit('change',this.checked)
    },
    closeHandler(){
      this.visible = false
      this.$emit('close',this.name)
    }
  }
}
</script>

<style>

</style>
