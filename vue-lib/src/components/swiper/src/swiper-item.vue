<script>
export default {
  name:'ui-swiper-item',
  data(){
    return {
      height:0
    }
  },
  props:['content'],
  mounted(){
    console.log(this.$refs)
    var child = this.$refs.item.children
    
    if(child[0].nodeName == 'IMG'){

      child[0].addEventListener('load',()=>{
        this.height = child[0].getBoundingClientRect().height
        this.$emit('height',this.height)
      })
    }
    else{
      this.height = child[0].getBoundingClientRect().height
      this.$emit('height',this.height)
    }
  },
  render(h,ctx){
    return (
      <li class="ui-swiper-item" ref="item" style={{height:this.height+'px'}}>
        {this.content}
      </li>
    )
  }
}
</script>

<style>

</style>
