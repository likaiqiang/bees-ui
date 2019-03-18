<template>
    <div class="dib" ref="tooltip" v-click-outside="hide">
        <div
            :class="classes"
            v-dom-portal
            ref="content"
            v-show="visib"
        >
            <span
                class="ui-tips-before"
                ref="before"
            >{{content}}</span>
            <i
                class="ui-tips-after"
                ref="after"
            ></i>
        </div>
        <div
            class="dib"
            ref="trigger" 
        >
            <slot></slot>
        </div>
    </div>
</template>

<script>
import Follow from "@/utils/follow.js";
import Render from "@/utils/render.js";
export default {
    name: "ui-tooltip",
    componnets: {
        Render
    },
    data() {
        return {
            isHoverContent:false
        };
    },
    computed: {
        classes() {
            return ["ui-tips-x", "ui-tips-" + this.align];
        },
        visib:{
            get(){
                return this.visible
            },
            set(v){
                this.$emit('update:visible',v)
            }
        }
    },
    props: {
        align: {
            type: String,
            default: "right",
            validator(val) {
                return (
                    ["center", "rotate", "left", "right", "reverse"].indexOf(
                        val
                    ) !== -1
                );
            }
        },
        content: {
            type: [String, Function],
            required: true
        },
        type: {
            type: String,
            default: "hover",
            validator(val) {
                return ["hover", "click"].indexOf(val) !== -1;
            }
        },
        visible:{
            type:Boolean,
            default:false
        }
    },
    methods: {
        getAttr(dom, attr) {
            return parseInt(getComputedStyle(dom)[attr]);
        },
        follow() {
            var offsetX = 0;
            var position = "5-7";
            var { before, after } = this.$refs;
            if (this.align == "left") {
                offsetX =
                    -0.5 * this.getAttr(before, "width") +
                        this.getAttr(before, "padding-left") || 0;
            } else if (this.align == "right") {
                offsetX =
                    0.5 * this.getAttr(before, "width") -
                        this.getAttr(before, "padding-left") || 0;
            } else if (this.align == "rotate") {
                position = "6-8";
            } else if (typeof this.align == "number") {
                offsetX = this.align;
            } else if (this.align == "reverse") {
                position = "7-5";
            }

            if (this.align != "rotate" && this.align != "reverse") {
                after.style.left = offsetX + 'px';
            }

            Follow(this.$refs.trigger, this.$refs.content, {
                offsets: {
                    x: offsetX,
                    y: 0
                },
                position: position,
                edgeAdjust: false
            });
        },
        hide(){
            this.visib = false
        }
    },
    mounted() {
        if(this.type=='click'){
            this.$refs.trigger.addEventListener('click',()=>{
                this.visib = true
                this.$nextTick(()=>{
                    this.follow()
                })
            })
        }
        if(this.type=="hover"){
            this.$refs.trigger.addEventListener('mouseenter',()=>{
                this.visib = true
                this.$nextTick(()=>{
                    this.follow()
                })
            })
            this.$refs.trigger.addEventListener('mouseleave',()=>{
                setTimeout(()=>{
                    if(!this.isHoverContent)
                        this.visib = false
                },0)
            })
            this.$refs.content.addEventListener('mouseenter',()=>{
                this.isHoverContent = true
            })
            this.$refs.content.addEventListener('mouseleave',()=>{
                this.isHoverContent = false
                this.visib = false
            })
        }
    }
};
</script>

<style>
</style>
