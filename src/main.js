import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import {
  routes
} from "./routes"
import store from "./store"

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: "history"
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')