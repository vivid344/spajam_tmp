import Vue from 'vue'
import './plugins/vuetify'
import router from './plugins/router'
import store from './vuex/store'
import './registerServiceWorker'
import App from './layouts/App'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
