import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase';

import Home from './views/Home.vue'
import Register from '@/components/auth/Register.vue';
import Login from '@/components/auth/Login.vue';
import Settings from './components/main/Settings.vue'
import Menu from './views/Menu.vue'
import Restaurant from './views/Restaurant.vue'
import RestaurantDetail from './components/restaurant/RestaurantDetail.vue';
import QrCode from './views/QrCode.vue';
import ReviewList from './views/ReviewList.vue'



Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
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
      path: '/menu',
      name: 'menu',
      component: Menu,
    },
    {
      path:'/restaurant',
      name: 'restaurant',
      component: Restaurant
    },
    {
      path: '/reviewList',
      name: 'reviewList',
      component: ReviewList
    },
    {
      path:'/restDetail',
      name: 'restDetail',
      component: RestaurantDetail
    },
    {
      path:'/qrCode',
      name: 'qrCode',
      component: QrCode

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

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  if (to.fullPath !== '/login') {
    if(currentUser&&to.fullPath === '/signup')
    { 
      console.log('You already login')
      next('/home');
      return
    }
    if(to.fullPath === '/signup')
    {
      next();
      return
    }
    if (!currentUser) {
      next('/login');
      return
    }
  }

  next();
});

export default router;
