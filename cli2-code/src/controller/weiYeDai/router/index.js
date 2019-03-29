/**
 * Created by wangkai on 2018/5/16.
 */
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import home from '../page/home'
const BASE_PATH = '/wyd/';

export default new Router({
  routes:[
    {
      path: '',
      redirect: BASE_PATH + 'index',
    },
    {
      path: BASE_PATH + 'index',
      name: 'home',
      component: home,
    }
  ]
})
