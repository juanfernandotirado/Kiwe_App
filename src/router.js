import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Register from '@/components/auth/Register.vue';
import Login from '@/components/auth/Login.vue';

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/home'
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path:'/login',
      name: 'Login',
      component: Login
    },
    {
      path:'/signup',
      name: 'Signup',
      component: Register
    },
    {
      path: '/userprofile',
      name: 'UserProfile',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/UserProfile.vue')
    }
  ]
});

export default router;
