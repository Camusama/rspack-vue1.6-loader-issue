import Vue from 'vue'
import App from './App.vue'
import './index.css'
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)
new Vue({
  el: '#root',
  render: h => h(App),
})
