import Vue from 'vue'
import App from './App.vue'
import VueClipboard from 'vue-clipboard2'

Vue.use(VueClipboard)

Vue.config.productionTip = false
Vue.config.ignoredElements.push('x-layer')

new Vue({
  render: (h) => h(App),
}).$mount('#app')
