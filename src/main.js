import Vue from 'vue'
<<<<<<< HEAD
<<<<<<< HEAD
import './plugins/axios'
=======
>>>>>>> e2206a0d7547803d61cd6d36c85533feb42262eb
=======
import './plugins/axios'
>>>>>>> 94d0b0f19288ccc4723fec543c89ce9bc2a019a1
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
