import Vue from 'vue'
<<<<<<< HEAD
import './plugins/axios'
=======
>>>>>>> e2206a0d7547803d61cd6d36c85533feb42262eb
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
