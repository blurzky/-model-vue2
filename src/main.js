import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {mountApi} from './assets/js/api'
import loading from './components/Loading.vue'

Vue.config.productionTip = false

Vue.use(mountApi)
Vue.component('loading', loading)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
