import Dialog from './src/dialog.vue'
import dialog from './src/dialog.js'
import Vue from 'vue'
Vue.use(dialog)
Vue.component(Dialog.name,Dialog)
export default Dialog