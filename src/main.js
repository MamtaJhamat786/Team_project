import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import firebase from 'firebase'

import i18n from './i18n'


Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)


Vue.config.productionTip = false

const config = {
  apiKey: 'AIzaSyA-6d87mtxWv4nlHFrdsdTLUrLeHT5Vf7s',
  authDomain: 'vue-firebase-sample-23acb.firebaseapp.com',
  projectId: 'vue-firebase-sample-23acb',
  storageBucket: 'vue-firebase-sample-23acb.appspot.com',
  messagingSenderId: '830658520809',
  appId: '1:830658520809:web:ddfe6b9211b2646d9e7278'
}
firebase.initializeApp(config)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store,
  i18n,
  render: function (h) { return h(App) }
}).$mount('#app')
