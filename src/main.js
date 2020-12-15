import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import i18n from './i18n'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: function (h) { return h(App) }
}).$mount('#app')
