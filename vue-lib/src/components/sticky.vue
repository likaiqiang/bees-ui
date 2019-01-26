<template>
  <div :style="wrapperStyles" ref="wrapper">
    <div :style="styles" ref="sticky">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSticky: false,
      wrapperHeight: "auto",
      width:'auto'
    };
  },
  props: {
    distance: {
      type: Number,
      default: 0
    }
  },
  computed: {
    styles() {
      return {
        position: this.isSticky ? 'fixed' : 'static',
        top: this.isSticky ? this.distance + 'px' : "",
        width:this.width
      };
    },
    wrapperStyles(){
        return {
            height:this.wrapperHeight
        }
    }
  },
  mounted() {
    this.width = this.$refs.sticky.getBoundingClientRect().width + 'px'

    window.addEventListener('resize',()=>{
        this.width = document.body.getBoundingClientRect().width + 'px'
    })
    window.addEventListener("scroll", () => {
      var rectTop = this.$refs.wrapper.getBoundingClientRect().top;
      if (rectTop < this.distance) {
        this.isSticky = true;
        console.log('滚过了')
      } else {
        this.isSticky = false;
        console.log('没有滚过')
      }
    });
    if (window.MutationObserver) {
      var mutationObserver = new window.MutationObserver(function(mutations) {
          console.log('mutations')
        if (
          mutations[0].addedNodes.length ||
          mutations[0].removedNodes.length
        ) {
          this.updateHeight()
        }
      });
      mutationObserver.observe(this.$refs.sticky, {
        subtree: true,
        childList: true
      });
    } else {
      if (window.addEventListener) {
        this.$refs.sticky.addEventListener("DOMNodeInserted",()=>{
            this.updateHeight()
        });
        this.$refs.sticky.addEventListener("DOMNodeRemoved",()=>{
            this.updateHeight()
        });
      } else if (window.attachEvent) {
        this.$refs.sticky.attachEvent("onDOMNodeInserted", ()=>{
          this.updateHeight()
        });
        this.$refs.sticky.attachEvent("onDOMNodeRemoved", ()=>{
          this.updateHeight()
        });
      }
    }
  },
  watch: {
    isSticky: function(newVal) {
      if (newVal) {
        this.$emit('sticky-start')
        this.updateHeight()
      }
      else{
          this.$emit('sticky-end')
      }
    }
  },
  methods:{
      updateHeight(){
          this.wrapperHeight = getComputedStyle(this.$refs.sticky).height;
          this.$emit('sticky-update')
      }
  }
};
</script>
