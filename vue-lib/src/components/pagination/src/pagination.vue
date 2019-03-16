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
            <a href="javascript:;" class="ui-page ui-page-prev">
              <ui-icon size="25" type="ios-arrow-back"></ui-icon>
            </a>
          ),
          nextButton = (
            <a href="javascript:;" class="ui-page ui-page-next">
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
      if(curPage>=this.total){
        nextButton = (
          <span class="ui-page ui-page-next">
            <ui-icon size="25" type="ios-arrow-back"></ui-icon>
          </span>
        )
      }
      var arr = [1,curPage-2,curPage-1,curPage,curPage+1,curPage+2,Math.ceil(this.total/this.every)]

      return (
        <div class="ui-page-x">
          {prevButton}
          {
            this.unique(arr).sort((a,b)=>a-b).reduce((prev,current,index,arr)=>{
              prev.push(<a href="javascript:" class={['ui-page',curPage==index?'ui-page-current':'']}>{arr[index]}</a>)
              if(arr[index+1] && arr[index+1] - arr[index]>1){
                prev.push(<span class="ui-page ui-page-ellipsis">...</span>)
              }
              return prev
            },[])
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
      }
    }
};
</script>

<style>
</style>
