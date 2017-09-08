'use strict';

import Vue from 'vue';
import Router from 'vue-router';
import Hello from '../components/Hello';
import A from '../components/A';
import Button from '../components/Button';
import Input from '../components/Input';
import User from '../components/user';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path:'/a',
      name:'A',
      component:A
    },
    {
      path:'/input',
      name:'Input',
      component:Input
    },
    {
      path:'/button',
      name:'Button',
      component:Button
    },
    {
      path:'/user',
      name:'User',
      component:User
    }
  ]
});