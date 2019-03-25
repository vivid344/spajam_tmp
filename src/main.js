import Vue from 'vue'
import './plugins/vuetify'
import router from './router'
import store from './store/store'
import './registerServiceWorker'
import App from './layouts/App'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
