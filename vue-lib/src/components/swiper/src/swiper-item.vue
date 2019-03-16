<script>
export default {
  name:'ui-swiper-item',
  data(){
    return {
      height:'auto'
    }
  },
  props:['content'],
  mounted(){
    
  },
  render(h,ctx){
    return (
      <li class="ui-swiper-item">
        {this.content}
      </li>
    )
  }
}
</script>

<style>

</style>
