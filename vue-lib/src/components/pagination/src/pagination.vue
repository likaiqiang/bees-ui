<script>
import Icon from '../../icon/index.js'
export default {
    name: "ui-pagination",
    components:{
      Icon
    },
    props:{
      total:{
        type:Number,
        default:0
      },
      curPage:{
        type:Number,
        default:1
      },
      every:{
        type:Number,
        default:15
      }
    },
    render(h){
      var curPage = this.curPage,
          prevButton = (
            <a href="javascript:;" class="ui-page ui-page-prev" onClick={()=>{
              this.prev()
            }}>
              <ui-icon size="25" type="ios-arrow-back"></ui-icon>
            </a>
          ),
          nextButton = (
            <a href="javascript:;" class="ui-page ui-page-next" onClick={()=>{
              this.next()
            }}>
              <ui-icon size="25" type="ios-arrow-back"></ui-icon>
            </a>
          )
      if(curPage <=1){
        prevButton = (
          <span class="ui-page ui-page-prev">
            <ui-icon size="25" type="ios-arrow-back"></ui-icon>
          </span>
        )
      }
      if(curPage>=Math.ceil(this.total/this.every)){
        nextButton = (
          <span class="ui-page ui-page-next">
            <ui-icon size="25" type="ios-arrow-back"></ui-icon>
          </span>
        )
      }

      return (
        <div class="ui-page-x">
          {prevButton}
          {
            this.pages.map((page,index)=>{
              if(this.curPage==page)
                return <span class="ui-page ui-page-current">{page}</span>
              else 
                if('...'==page) return <span class="ui-page ui-page-ellipsis">...</span>
                else
                  return <a href="javascript:;" class="ui-page" onClick={
                    ()=>{
                      this.pageClickHandler(page)
                    }
                  }>{page}</a>
            })
          }
          {nextButton}
        </div>
      )
    },
    methods:{
      unique(array){
        var n = [];
        for(var i = 0;i < array.length; i++){
            if(n.indexOf(array[i]) == -1) n.push(array[i]);
        }
        return n;
      },
      prev(){
        if(this.curPage <=1) return
        this.$emit('update:curPage',this.curPage-1)
      },
      next(){
        if(this.curPage>=Math.ceil(this.total/this.every)) return 
        this.$emit('update:curPage',this.curPage+1)
      },
      pageClickHandler(page){
        this.$emit('update:curPage',page)
        this.$emit('change',page)          
      }
    },
    computed:{
      pages(){
        var curPage = this.curPage
        var arr = [1,curPage-2,curPage-1,curPage,curPage+1,curPage+2,Math.ceil(this.total/this.every)]
        return this.unique(arr).sort((a,b)=>a-b).filter(item=>{
          return item>=1 && item <= Math.ceil(this.total/this.every)
        }).reduce((prev,current,index,arr)=>{
          prev.push(current)
          if(arr[index+1] && arr[index+1] - arr[index]>1){
            prev.push('...')
          }
          return prev
        },[])
      }
    }
};
</script>

<style>
</style>
