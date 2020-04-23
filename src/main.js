import Vue from 'vue'
import './plugins/axios'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
