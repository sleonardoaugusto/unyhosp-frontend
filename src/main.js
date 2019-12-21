import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueTheMask from 'vue-the-mask'
import Vuelidate from 'vuelidate/src'

Vue.config.productionTip = false
Vue.use(VueTheMask)
Vue.use(Vuelidate)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
