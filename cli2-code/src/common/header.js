/**
 * Created by wangkai on 2018/8/31.
 */

import Vue from 'vue'
import './vant';
import 'lib-flexible'
import axios from 'axios'
import VueLazyLoad from 'vue-lazyload'//图片懒加载
Vue.use(VueLazyLoad)
Vue.prototype.$axios = axios;
Vue.config.productionTip = false
