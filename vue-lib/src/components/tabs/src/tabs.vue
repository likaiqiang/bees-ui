<template>
    <div>
        <ui-tab-head class="ui-tab-tabs">
            <i
                class="ui-tab-line"
                ref="line"
            ></i>
            <a
                href="javascript:"
                ref="tab"
                @click="changeSelect($event,item.name)"
                :class="[value == item.name ? 'checked' : '','ui-tab-tab']"
                v-for="(item, index) in navs"
                :key="index"
            >
                {{item.label}}
            </a>
        </ui-tab-head>
        <div class="ui-tab-contents">
            <ui-tab-body
                :contents="contents"
                :curName="value"
            > </ui-tab-body>
        </div>
    </div>
</template>

<script>
import tabHead from "./tab-head.vue";
import tabBody from "./tab-body.vue";
import Velocity from "velocity-animate";
export default {
    name: "ui-tabs",
    components: {
        [tabHead.name]: tabHead,
        [tabBody.name]: tabBody
    },
    computed: {
        navs() {
            return this.$slots.default
                .filter(item => {
                    return item.tag !== undefined;
                })
                .map(item => {
                    return {
                        name: item.componentOptions.propsData.name,
                        label: item.componentOptions.propsData.label
                    };
                });
        },
        contents() {
            return this.$slots.default
                .filter(item => {
                    return item.tag !== undefined;
                })
                .map(item => {
                    return item.componentOptions;
                });
        }
    },
    props: {
        value: {}
    },
    methods: {
        changeSelect(e,name) {

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
    },
    mounted() {
        var index = this.navs.findIndex(item => {
            return item.name === this.value;
        });

        if (index !== -1) {
            var width = this.$refs.tab[index].getBoundingClientRect().width;
            this.$refs.line.style.width = width + "px";
            this.$refs.line.style.left =
            this.position(this.$refs.tab[index]) + "px";
        }
    }
};
</script>

<style>
.checked {
    color: orange;
}
</style>
