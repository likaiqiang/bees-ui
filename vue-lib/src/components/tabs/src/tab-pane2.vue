<template>
    <div>
        <div class="ui-tab-tabs">
            <i
                class="ui-tab-line"
                ref="line"
            ></i>
            <a
                href="javascript:"
                ref="tab"
                @click="changeSelect(name)"
                class="ui-tab-tab"
            >
                {{item.componentOptions.propsData.label}}
            </a>
        </div>
        <div class="ui-tab-contents">
            <div
                class="ui-tab-content"
                v-for="(item,index) in tabNavs"
                :key="index"
                v-show="item.componentOptions.propsData.name==value"
            >
                {{`content${index}`}}
            </div>
        </div>
    </div>
</template>

<script>
import Velocity from "velocity-animate";
export default {
    name: "ui-tabs",
    data() {
        return {};
    },
    created() {
        console.log(this);
    },

    mounted() {
        var index = this.tabNavs.findIndex(item => {
            return item.componentOptions.propsData.name === this.value;
        });

        if (index !== -1) {
            var width = this.$refs.tab[index].getBoundingClientRect().width;
            this.$refs.line.style.width = width + "px";
            this.$refs.line.style.left =
                this.position(this.$refs.tab[index]) + "px";
        }
    },
    methods: {
        changeSelect(e, name) {
            var width = e.target.getBoundingClientRect().width;
            this.$emit("input", name);
            this.$refs.line.style.width = width + "px";

            Velocity(
                this.$refs.line,
                {
                    left: this.position(e.target).left + "px"
                },
                {
                    duration: "300"
                }
            );
        },
        position(dom) {
            var parent = dom.parentElement;
            return {
                left:
                    dom.getBoundingClientRect().left -
                    parent.getBoundingClientRect().left,
                top:
                    dom.getBoundingClientRect().top -
                    parent.getBoundingClientRect().top
            };
        }
    }
};
</script>

<style>
</style>
