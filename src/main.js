import Vue from 'vue'
import DashboardPlugin from './plugins/dashboard-plugin'
import App from './App.vue'
import VueEllipseProgress from '@/plugin'
import router from './routes/router'
import Dialog from 'vue-dialog-loading'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

Vue.config.productionTip = false
// plugin setup
Vue.use(DashboardPlugin)
Vue.use(VueEllipseProgress)
Vue.use(Dialog, {
  dialogBtnColor: '#0f0'
})

Vue.use(Toast, {
  transition: "my-custom-fade",
  maxToasts: 14,
  newestOnTop: true
});


/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')