import Vue from 'vue';
import Router from 'vue-router';

import LoginPage from '../login/LoginPage'
import Dash from '../home/Dash'

import Welcome from '../home/Welcome'
import QueryVehicular from '../home/QueryVehicular'
import QuerySubjective from '../home/QuerySubjective'
import Delete from '../home/Delete'
import Download from '../home/Download'

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Dash, children: [{path:'', component: Welcome}] },
    { path: '/queryVehicular', component: Dash, children: [{path:'', component: QueryVehicular}] },
    { path: '/querySubjective', component: Dash, children: [{path:'', component: QuerySubjective}] },
    { path: '/delete', component: Dash, children: [{path:'', component: Delete}] },
    { path: '/download', component: Dash, children: [{path:'', component: Download}] },
    { path: '/login', component: LoginPage },

    // otherwise redirect to home
    { path: '*', redirect: '/' }
  ]
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user-token');

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
})
