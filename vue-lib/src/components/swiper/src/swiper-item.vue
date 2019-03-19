<script>
export default {
  name:'ui-swiper-item',
  data(){
    return {
    }
  },
  props:['content'],
  mounted(){
    var child = this.$refs.item.children
    
    if(child[0].nodeName == 'IMG'){

      child[0].addEventListener('load',()=>{
        var height = child[0].getBoundingClientRect().height
        this.$emit('load',height)
      })
    }
    else{
      var height = child[0].getBoundingClientRect().height
      this.$emit('load',height)
    }
  },
  render(h,ctx){
    return (
      <li class="ui-swiper-item" ref="item">
        {this.content}
      </li>
    )
  }
}
</script>

<style>

</style>
