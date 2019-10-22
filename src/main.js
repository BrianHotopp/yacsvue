import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)


// es2015 module
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

// set default config
VueCookies.config('7d')

// set global cookie
VueCookies.set('theme','default');
VueCookies.set('hover-time','1s');

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'

import register from './components/register.vue'
import login from './components/login.vue'

Vue.config.productionTip = false
const routes = [
  { path: '/register', component: register },
  { path: '/login', component: login }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
