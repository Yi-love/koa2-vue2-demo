'use strict';

import Vue from 'vue';
import 'normalize.css';
import '../css/common.css';
import '../css/input.less';
import '../css/a.scss';
import '../css/button.scss';

import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = true; //开启提示

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components : {App}
});
