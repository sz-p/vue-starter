import Router from 'vue-router'

import About from '../pages/about/about';
import Index from '../pages/index/index';

export default new Router({
  mode: 'history',
  base: window.location.pathname,
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/about',
      name: 'About',
      alias: '/',
      component: About
    }
  ]
})
