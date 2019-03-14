<template>
    <div>
        <div class="ui-range-input ui-range" :style="{width:width+'px'}" @click="clickHandler">
            <div class="ui-range-track" ref="track" :style="{'border-left-width':left+'px'}">
                <ui-tooltip ref="tooltip" :visible.sync="visible" :content="tooltip">
                    <a class="ui-range-thumb" @mousedown="down" ref="thumb" href="javascript:" draggable="false"></a>
                </ui-tooltip>
            </div>
        </div>
        <input type="range" ref="input" class="ui-range-input" v-model="val" :min="min" :max="max" :step="step">
    </div>
</template>
<script>
import Tooltip from '../../tooltip/index.js'
export default {
    name: 'ui-slider',
    data() {
        return {
            width: 1,
            posThumb: {
                x: '',
                value: ''
            },
            visible: false
        }
    },
    props: {
        value: {
            type: Number,
            required: true
        },
        min: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: 100
        },
        step: {
            type: Number,
            default: 10
        },
        tooltip: {
            type: [String, Function],
            default: '我是content'
        }
    },
    computed: {
        val(){
            return this.validatorValue(this.value)
        },
        left() {
            var value = this.val
            var max = this.max;
            var min = this.min;
            return this.width * (value - min) / (max - min)
        }
    },
    mounted() {
        this.width = this.$refs.input.getBoundingClientRect().width
        document.addEventListener('mousemove', this.move)
        document.addEventListener('mouseup', this.up)
    },
    components: {
        [Tooltip.name]: Tooltip
    },
    methods: {
        clickHandler(event) {
            var target = event && event.target
            var thumb = this.$refs.thumb
            if (target && target != thumb) {
                var distance = event.clientX - thumb.getBoundingClientRect().left - thumb.getBoundingClientRect().width / 2;

                this.$emit('input', this.val + (this.max - this.min) * distance / this.width)
            }
        },
        down(event) {
            this.posThumb.x = event.clientX;
            this.posThumb.value = this.val
            this.visible = true
        },
        move(event) {
            if (typeof this.posThumb.x == 'number') {
                var distance = event.clientX - this.posThumb.x
                var value = this.validatorValue(this.posThumb.value + (this.max - this.min) * distance / this.width)
                this.$emit('input', value)
                this.$refs.tooltip.follow()
                event.preventDefault();
            }
        },
        up() {
            this.posThumb.x = null
            this.posThumb.value = null
            this.visible = false
        },
        validatorValue(value) {
            var min = this.min,
                max = this.max,
                step = this.step
            if (value > max || (max - value) < step / 2) {
                value = max;
            } else if (value == '' || value < min || (value - min) < step / 2) {
                value = min;
            } else {
                // 寻找最近的合法value值
                value = min + Math.round((value - min) / step) * step;
            }
            return value
        }
    },
    beforeDestory() {
        document.removeEventListener('mousemove', this.move)
        document.removeEventListener('mouseup', this.up)
    }

}
</script>
<style>
</style>
