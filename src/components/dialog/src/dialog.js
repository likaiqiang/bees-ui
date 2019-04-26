import Vue from 'vue';
import Dialog from './dialog.vue';

let dialogConstructor = Vue.extend(Dialog);

const dialog = function(config){
    var vm = new dialogConstructor({
        propsData:{
            title:config.title,
            content:config.content,
            buttons:config.buttons,
            visible:true
        }
    })
    vm.$on('update:visible',()=>{
        vm.$destroy()
        document.body.removeChild(vm.$el)
    })
    vm.$mount()
    document.body.appendChild(vm.$el)
}


export default dialog;