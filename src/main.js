import Vue from 'vue'
import './plugins/vuetify'
import router from './plugins/router'
import store from './vuex/store'
import './registerServiceWorker'
import App from './layouts/App'
import firebase from 'firebase'

Vue.config.productionTip = false;

const config = {
  apiKey: "AIzaSyBfiqp1ah6IV8Rq-b4pK8TdF1hA-QL2Aeo",
  authDomain: "spajam2019-tmp.firebaseapp.com",
  databaseURL: "https://spajam2019-tmp.firebaseio.com",
  projectId: "spajam2019-tmp",
  storageBucket: "spajam2019-tmp.appspot.com",
  messagingSenderId: "627257785310"
};

firebase.initializeApp(config);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
