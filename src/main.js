import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { path } from './path'
import VueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
  routes: path,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
