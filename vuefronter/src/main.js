import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import animate from "animate.css";
import EasySlider from 'vue-easy-slider'
Vue.use(animate);

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(EasySlider);

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
