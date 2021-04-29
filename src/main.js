import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.prototype.$chrome = window.chrome

new Vue({
  render: h => h(App)
}).$mount('#app')
