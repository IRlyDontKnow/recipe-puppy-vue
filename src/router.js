import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/favs',
      name: 'favourites',
      component: () => import('@/views/Favourites.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      props: route => ({ returnPath: route.query.returnPath }),
    },
    {
      path: '/add',
      name: 'addRecipe',
      component: () => import('@/views/AddRecipe.vue'),
    },
  ],
});
