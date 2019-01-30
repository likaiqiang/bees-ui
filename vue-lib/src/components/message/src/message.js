import Vue from 'vue';
import Message from './message.vue';

let MessageConstructor = Vue.extend(Message);

const message = function(config){
    var vm = new MessageConstructor({
        propsData:config
    })
    vm.$mount()
    document.body.appendChild(vm.$el)
}

const plugin = {}
plugin.install = function (Vue, options) {
    Vue.prototype.$message = message
}

export default plugin;