<template>
    <div>
        <ui-tab-head class="ui-tab-tabs">
            <a
                href="javascript:"
                ref="tab"
                @click="changeSelect($event,item.name)"
                :class="[value == item.name ? 'checked' : '','ui-tab-tab']"
                v-for="(item, index) in navs"
                :key="index"
            >
                <Render v-if="typeof item.label == 'function'" :render="item.label"></Render>
                <template v-else>
                    {{item.label}}
                </template>
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
import Render from '@/utils/render.js'
import {parent} from '@/utils/dom.js'
export default {
    name: "ui-tabs",
    components: {
        [tabHead.name]: tabHead,
        [tabBody.name]: tabBody,
        Render
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
        changeSelect(e, name) {
            this.$emit("input", name);
        },
    },
    mounted() {
        
    }
};
</script>

<style>
.checked {
    color: orange;
}
</style>
