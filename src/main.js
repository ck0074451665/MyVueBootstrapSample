// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import BootstrapVue from 'bootstrap-vue'
import store from './store'
import 'bootstrap'
import 'normalize.css'
import './assets/base.scss'
// import 'jquery'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.prototype.$JQuery = $
Vue.use(BootstrapVue)
Vue.config.productionTip = false

/* eslint-disable no-new  */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
