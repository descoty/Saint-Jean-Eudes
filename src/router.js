import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import Login from './views/Login/Login.vue'
=======
import Home from './views/Home.vue'
>>>>>>> e2206a0d7547803d61cd6d36c85533feb42262eb

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
<<<<<<< HEAD
      name: 'login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'home',
      component: () =>
        import('./views/Home/Home.vue')
    },
    {
      path: '/*',
      name: 'notFound',
      component: () =>
        import('./views/404/notFound.vue')
    },
=======
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
>>>>>>> e2206a0d7547803d61cd6d36c85533feb42262eb
  ]
})
