import Loading from './loading.vue'
import Vue from 'vue'
var constructor = Vue.extend(Loading)
var loading
var directive = {
  inserted:function(el,binding,vnode){
    var {small} = binding.modifiers
    var value = binding.value
    var height = el.getBoundingClientRect().height
    
    loading = new constructor({
      propsData:{
        small,
        height:height+''
      }
    })
    loading.$mount()
    var position = getComputedStyle(el).position
    el.dataset.position = position
    el.style.position = 'relative'
    if(value)
      el.appendChild(loading.$el)
  },
  componentUpdated(el,binding,vnode){
    var value = binding.value
    if(value){
      var position = getComputedStyle(el).position
      el.dataset.position = position
      el.style.position = 'relative'
      el.appendChild(loading.$el)
    }
    else{
      el.style.position = el.dataset.position
      el.dataset.position = ''
      el.removeChild(loading.$el)
    }
  },
  update(){
    
  },
  unbind:function(el,binding,vnode){
    loading.$destroy()
    el.style.position = el.dataset.position
    el.dataset.position = ''
    el.removeChild(loading.$el)
  }
}

export default directive