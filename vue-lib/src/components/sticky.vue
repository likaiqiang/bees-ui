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
      width: "auto",
      timeId:null
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
        position: this.isSticky ? "fixed" : "static",
        top: this.isSticky ? this.distance + "px" : "",
        width: this.width
      };
    },
    wrapperStyles() {
      return {
        height: this.wrapperHeight
      };
    }
  },
  mounted() {
    this.width = this.$refs.sticky.getBoundingClientRect().width + "px";

    window.addEventListener("resize", this.resizeHandler);
    window.addEventListener("scroll", this.scrollHandler);
    if (window.MutationObserver) {
      this.mutationObserver = new window.MutationObserver(function(mutations) {
        console.log("mutations");
        if (
          mutations[0].addedNodes.length ||
          mutations[0].removedNodes.length
        ) {
          this.updateHeight();
        }
      });
      this.mutationObserver.observe(this.$refs.sticky, {
        subtree: true,
        childList: true
      });
    } else {
      this.$refs.sticky.addEventListener("DOMNodeInserted", this.domInsertedHandler);
      this.$refs.sticky.addEventListener("DOMNodeRemoved", this.domNodeRemovedHandler);
    }
  },
  beforeDestroy(){
      window.removeEventListener("resize", this.resizeHandler);
      window.removeEventListener("scroll", this.scrollHandler);
      this.mutationObserver = null

      this.$refs.sticky.removeEventListener("DOMNodeInserted", this.domInsertedHandler);
      this.$refs.sticky.removeEventListener("DOMNodeRemoved", this.domNodeRemovedHandler);
  },
  watch: {
    isSticky: function(newVal) {
      if (newVal) {
        this.$emit("sticky-start");
        this.updateHeight();
      } else {
        this.$emit("sticky-end");
      }
    }
  },
  methods: {
    updateHeight() {
      this.wrapperHeight = getComputedStyle(this.$refs.sticky).height;
      this.$emit("sticky-update");
    },
    resizeHandler() {
      this.width = document.body.getBoundingClientRect().width + "px";
    },
    scrollHandler() {
      var rectTop = this.$refs.wrapper.getBoundingClientRect().top;
      if (rectTop < this.distance) {
        this.isSticky = true;
        console.log("滚过了");
      } else {
        this.isSticky = false;
        console.log("没有滚过");
      }
    },
    domInsertedHandler() {
        this.updateHeight()
    },
    domNodeRemovedHandler(){
        this.updateHeight()
    }
  }
};
</script>
