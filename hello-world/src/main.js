import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'

import register from './components/register.vue'


Vue.config.productionTip = false
const routes = [
  { path: '/testroute/register', component: register }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
