import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import VueMeta from 'vue-meta';
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(fas);

Vue.component('fa-icon', FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  VueMeta,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
