import datePicker from './src/datePicker.vue'
import Vue from 'vue'
import DomPortal from 'vue-dom-portal'
Vue.use(DomPortal)
Vue.component(datePicker.name,datePicker)
export default datePicker