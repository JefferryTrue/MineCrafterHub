import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'element-ui/lib/theme-chalk/index.css';

import animate from "animate.css";
Vue.use(animate);

import axios from 'axios'

Vue.prototype.$axios = axios;
Vue.config.productionTip = false

import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css'

import showdown from 'showdown'
Vue.prototype.converter = new showdown.Converter();

Vue.use(mavonEditor);



Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = el.dataset.title
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
