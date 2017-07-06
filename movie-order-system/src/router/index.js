import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import movie from '@/components/movie'
import find from '@/components/find'
import my from '@/components/my'
import login from '@/components/login'
import map from '@/components/map'
import register from '@/components/register'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/movie',
      name: 'movie',
      component: movie
    },
    {
      path: '/find',
      name: 'find',
      component: find
    },
     {
      path: '/my',
      name: 'my',
      component: my
    },
     {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/map',
      name: 'map',
      component: map
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
  ]
})
