<script>
import { isHtml } from "@/utils/tools.js";
export default {
  props: {
    content:{
        type:[String,Function]
    }
  },
  render(h){
      return (
          <div class="ui-dialog-body">
            {
                this.renderBody()
            }
          </div>
      )
  },
  methods:{
      renderBody(){
        var content = this.content
        if(typeof content == 'function'){
            content = content()
        }
        if( this.$slots.default && this.$slots.default.length){
            return this.$slots.default[0]
        }
        else {
            if(isHtml(content)){
                return <div domPropsInnerHTML={content}></div>
            }
            else {
                return <div>{content}</div>
            }
        }
      }
  }
};
</script>
