import Vue from 'vue';
import Message from './message.vue';

let MessageConstructor = Vue.extend(Message);

const message = function(){
    var instance = null
    return function(config){
        if(instance){
            instance.$destroy()
            document.body.removeChild(instance.$el)
        }
        instance = new MessageConstructor({
            propsData:config
        })
        instance.$on('close',()=>{
            instance.$destroy()
            document.body.removeChild(instance.$el)
            instance = null
        })
        instance.$mount()
        document.body.appendChild(instance.$el)
    }
}
const plugin = {}
plugin.install = function (Vue, options) {
    Vue.prototype.$Message = message()
}

export default plugin;